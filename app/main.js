import React from 'react';
import {render} from 'react-dom';
import {combineReducers, createStore, applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {default as rootReducer} from "./reducers";
import rootSaga from "./sagas";
import App from './App.js';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ state : rootReducer});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
