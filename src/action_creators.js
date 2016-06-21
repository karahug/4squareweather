export function selectLocation(location){
    return({'type': 'SELECT_LOCATION', location});
}


export function setLocations(locations){
    return {'type': 'SET_LOCATIONS', locations};
}

export function setSearchTerms(searchTerms, locationTerms){
    return {'type': 'SET_SEARCH_TERMS', searchTerms, locationTerms };
}

export function setWeatherInfo(weather){
    return {'type': 'SET_WEATHER_INFO', weather};
}