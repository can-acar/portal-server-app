/* @flow */


import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import createSagaMonitor from "@clarketm/saga-monitor";
import {createLogger} from "redux-logger";
import {rootReducer} from "./rootReducer";
import rootSaga from "../saga";

const defaultConfig = {
    level: "debug", // logging level
    verbose: true, // verbose mode
    color: "#03A9F4", // default color
    rootSagaStart: true, // show root saga start effect
    effectTrigger: true, // show triggered effects
    effectResolve: true, // show resolved effects
    effectReject: true, // show rejected effects
    effectCancel: true, // show cancelled effects
    actionDispatch: true // show dispatched actions
};

const loggerMiddleware = createLogger();

const sagaMiddleware = createSagaMiddleware(options => {
    if(process.env.NODE_ENV !== 'production'){
        options.sagaMonitor = createSagaMonitor(defaultConfig);
    }
    return options;
});


const bindMiddleware = (middleware = []) => {

    if(process.env.NODE_ENV !== 'production'){
        return composeWithDevTools(applyMiddleware(...middleware.concat(loggerMiddleware)))
    }

    return compose(applyMiddleware(...middleware));

};

const configureAppStore = (preloadedState) => {

    const rootStore = rootReducer(preloadedState);
    const middleware = bindMiddleware([sagaMiddleware]);

    const store = createStore(
        rootStore,
        preloadedState,
        middleware
    );


    store.asyncReducers = {};

    store.injectReducer = (key, reducer) => {

        if(Object.hasOwnProperty.call(store.asyncReducers, key)) return

        store.asyncReducers[key] = reducer;

        store.replaceReducer(rootReducer(store.asyncReducers));


    };

    store.removeReducer = (key) => {

        if(Object.hasOwnProperty.call(store.asyncReducers, key)){

            delete store.asyncReducers[key];

            store.replaceReducer(rootReducer(store.asyncReducers));

            console.log('%c %s cleared', 'background: #222; color: #bada55', key);
        }


    };

    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga, store.getState());
        return store;
    };

    store.runSagaTask();

    return store;
}

export default configureAppStore;
