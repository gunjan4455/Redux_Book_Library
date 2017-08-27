import React from 'react';
import {render} from 'react-dom';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {default as rootReducer} from './reducers';
import {isProd} from './config';
import rootSaga from './sagas';
import App from './App.js';
import 'styles/bootstrap.css';
import 'styles/style.css';

const logger = createLogger({ls
    predicate: (getState, action) => !isProd()
});

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ state : rootReducer});
const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
