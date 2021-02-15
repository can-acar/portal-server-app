import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11';
// For IE 11 support
import React from 'react';
import {hydrate} from 'react-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import App from "../app/index";

//import {Provider} from 'react-redux';


//const store = configureStore(window.__PRELOADED_STATE__);
const helmetContext = {
    htmlAttributes: {lang: 'tr'}
};

library.add(fab, fas, far)

hydrate(
    // <Provider store={store}>
    <HelmetProvider context={helmetContext}>
        <Helmet htmlAttributes={{lang: 'tr'}}>
            <title>Razzle React Server Render</title>
        </Helmet>
        <App/>
    </HelmetProvider>,
    // </Provider>,
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept('../app', () => {
        hydrate(
            // <Provider store={store}>
            <HelmetProvider context={helmetContext}>
                <App/>,
            </HelmetProvider>,
            document.getElementById('root')
        );
    });
}
