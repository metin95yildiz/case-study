import { useMemo } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import * as reducers from "./reducers";

let store;

const rootReducer = combineReducers(reducers);


function initStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware())
    )
    return store;
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        store = "";
    }
    if (typeof window === "undefined") return _store;

    if (!store) store = _store;

    return _store
}

export function useStore(initialState){
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store;
}