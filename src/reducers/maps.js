import { Map } from 'immutable';

const setLocations = (currentState, locations) =>{
    const newState = new Map({locations});
    return currentState.merge(newState);
};

const setSearchTerms = (currentState, searchTerms, locationTerms) => {
    const newState = {searchTerms, locationTerms};
    return currentState.merge(newState);
};

const selectLocation = (currentState, location) => {
    const newState = {'selected': location};
    return currentState.merge(newState);
};

const setWeatherInfo = (currentState, weather) => {
    const newState = {weather};
    return currentState.merge(newState);
}

export default function(currentState = new Map(), action){
    switch(action.type){
        case 'SET_LOCATIONS':
            return setLocations(currentState, action.locations);
        case 'SELECT_LOCATION':
            return selectLocation(currentState, action.location);
        case 'SET_SEARCH_TERMS':
            return setSearchTerms(currentState, action.searchTerms, action.locationTerms);
        case 'SET_WEATHER_INFO':
            return setWeatherInfo(currentState, action.weather);
    }
    return currentState;
}