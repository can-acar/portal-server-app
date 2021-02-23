//@flow
import * as React from "react";
import {Fragment} from "react";
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const App = () => (<Fragment>
        <Helmet
            htmlAttributes={{lang: 'tr', 'class': 'h-100'}}
            rootAttributes={{'class': 'flex-shrink-0'}}
            bodyAttributes={{'class': 'd-flex flex-column h-100'}}
        >
            <title>Test</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"/>
        </Helmet>
        <main className="flex-shrink-0">
            <div className="container">
                <div className="starter-template text-center py-5 px-3">
                    <h1>Bootstrap starter template</h1>
                    <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
                </div>
            </div>
        </main>
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <span className="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
    </Fragment>

);

App.prefetch = ({dispatch, state}) => {
    //dispatch({type: 'PUSH_META', payload: {title: ''}})
}
