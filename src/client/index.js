import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11';
import React, {Suspense} from 'react';
import {loadableReady} from "@loadable/component";
import {hydrate, render} from 'react-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {Provider, ReactReduxContext} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureAppStore from "../app/commons/configureAppStore";

import App from "../app/index";

const preloadedState = window.__INITIAL_STATE__;

delete window.__INITIAL_STATE__;

const store = configureAppStore(preloadedState);

const helmetContext = {
    htmlAttributes: {lang: 'tr'}
};

const renderMethod = !!module.hot ? render : hydrate

const appRoot = document.querySelector("#appRoot")
loadableReady(() => {
    renderMethod(
        <Provider store={store} context={ReactReduxContext}>
            <BrowserRouter>
                <HelmetProvider context={helmetContext}>
                    <Helmet htmlAttributes={{lang: 'tr'}}>
                        <title>Razzle React Server Render</title>
                    </Helmet>
                    <App/>
                </HelmetProvider>
            </BrowserRouter>
        </Provider>,
        appRoot
    )
});
if(module.hot){
    module.hot.accept();
}
// register({
//     swDest: 'my-service-worker-name.js',
// });
