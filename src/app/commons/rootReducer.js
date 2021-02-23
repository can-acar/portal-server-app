import {combineReducers} from "@reduxjs/toolkit";

import staticReducers from "../reducers";

export const rootReducer = (asyncReducers) => combineReducers({//asyncReducers

    ...asyncReducers,
    ...staticReducers,

});
