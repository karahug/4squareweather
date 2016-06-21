import 'babel-polyfill';
import { takeLatest } from 'redux-saga';
import { select, put, call } from 'redux-saga/effects';

import { listPlaces, getWeather } from '../util/api';
import {setLocations, setWeatherInfo } from '../action_creators';



const getLat = (state) => state.maps.get('selected').get('location').get('lat');
const getLng = (state) => state.maps.get('selected').get('location').get('lng');

const getSearchTerms = (state) => state.maps.get('searchTerms');
const getLocationTerms = (state) => state.maps.get('locationTerms');


export function* onSelectLocation(){
    const lat = yield select(getLat);
    const lng = yield select(getLng)
    const weather = yield call(getWeather, lat, lng);
    yield put(setWeatherInfo(weather));
}

export function* onSetSearchTerms(){
    const searchTerms = yield select(getSearchTerms);
    const locationTerms = yield select(getLocationTerms);
    const locations = yield call(listPlaces, searchTerms, locationTerms);
    yield put(setLocations(locations));
}

export default function*(){
    console.log('watching actions...');
    yield [takeLatest('SELECT_LOCATION', onSelectLocation),
    takeLatest('SET_SEARCH_TERMS', onSetSearchTerms), takeLatest('SELECT_LOCATION', onSelectLocation)
    ];
}