import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { AppContainer } from './components/app';
import { listPlaces, getWeather, getStaticMapSrc } from './util/api';
import reducer from './reducers/index';
import watchActions from './sagas/index';

// Add CSS files to bundle
require('../src/css/application.scss');

// listPlaces('pizza', '85283');

const initialState = {maps: new Map(
    { locations: undefined,
        selected: undefined,
    })};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, initialState, compose(applyMiddleware(sagaMiddleware), window.devToolsExtension ? window.devToolsExtension() : f=> f));
sagaMiddleware.run(watchActions);

// Render application to DOM
ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('app')
);