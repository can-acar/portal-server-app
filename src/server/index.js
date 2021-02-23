import React from 'react';
import express from 'express';
import {Helmet} from 'react-helmet';


import {renderToString} from 'react-dom/server';
import {HelmetProvider} from "react-helmet-async";
import {Provider, ReactReduxContext} from "react-redux";
import {matchPath, StaticRouter} from 'react-router-dom';
import serialize from 'serialize-javascript';
import path from 'path';
import {html, oneLineTrim} from 'common-tags';

import {ChunkExtractor, ChunkExtractorManager} from "@loadable/server";
import configureAppStore from "../app/commons/configureAppStore";
import routes from "../app/commons/routes";
import {fetchRoute} from "../app/commons/router";
import App from "../app/index";


const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
let statsFile
let extractor

if(process.env.NODE_ENV === 'production'){
    console.log('reading statsfile for PROD');
    statsFile = path.resolve('./build/loadable-stats.json')
    extractor = new ChunkExtractor({statsFile, entrypoints: ['client']})
}

const helmetContext = {
    htmlAttributes: {lang: 'tr'}
};

const server = express();

const Render = (markup, extractor, helmet, preloadState) => oneLineTrim(html`
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta charSet='utf-8'/>
        <base href="/">
        ${helmet.title.toString()}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}


    </head>
    <body ${helmet.bodyAttributes.toString()}>
    <div id="appRoot" class="d-flex flex-column flex-root h-100 w-100">${markup}</div>

    <script type="text/javascript">
        window.__INITIAL_STATE__ = ${serialize(preloadState, {isJSON: true, unsafe: false})}
    </script>

    ${extractor.getScriptTags()}
    </body>
    </html>`);

const Document = (store, extractor, helmetContext, req) => {
    const html = renderToString(
        <Provider store={store} context={ReactReduxContext}>
            <StaticRouter
                location={req.path}
                context={ReactReduxContext}>
                <ChunkExtractorManager extractor={extractor}>
                    <HelmetProvider context={helmetContext}>
                        <App/>
                    </HelmetProvider>
                </ChunkExtractorManager>
            </StaticRouter>
        </Provider>
    );
    return html
}

server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/*', async(req, res) => {
        await fetchRoute(req, async(router) => {

            if(process.env.NODE_ENV === 'development'){

                extractor = new ChunkExtractor({
                    statsFile: path.resolve('build/loadable-stats.json'),
                    entrypoints: ['client'],
                });
            }

            const context = {router};

            const store = configureAppStore(context);


            store.runSagaTask()

            const promises = routes
                .filter(route => matchPath(req.url, route))
                .map(route => route.component)
                .filter(comp => comp.prefetch)
                .map(comp => comp.prefetch({dispatch: store.dispatch, state: store.getState()}))


            Promise.all(promises).then(() => {

                const preloadedState = store.getState();

                const helmet = Helmet.renderStatic();
                // Grab the initial state from our Redux store
                const html = Document(store, extractor, helmet, req);

                const response = Render(html, extractor, helmet, preloadedState);

                if(context.url){
                    res.status(301).redirect(context.url);

                }else{

                    res.status(200).send(response);
                }
            });
        });

    });

export default server;
