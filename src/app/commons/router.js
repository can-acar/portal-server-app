// @flow

import {createReducer} from "@reduxjs/toolkit";
import qs from "qs";

const initialState = {};


export const routerStore = createReducer(initialState, {

    ['PUSH']: (state, {payload}) => {
        return {
            ...state,
            ...payload
        }
    },
    ['SUCCESS']: (state, {payload}) => {
        return {
            ...state,
            ...payload
        }
    },
    ['FAILED']: (state, {payload}) => {
        return {
            ...state,
            ...payload,
            error: true,
        }
    }

});


export const fetchRoute = async(request, callback) => {

    const {hash, url, query, path, pathname} = request._parsedUrl;

    const params = qs.parse(request.query);

    return callback(Object.assign({}, initialState, {hash, query, pathname, params, url}))
}
