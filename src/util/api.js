import fetch from 'isomorphic-fetch';

import secrets from '../../secrets.json' ;


export function listPlaces(keyword, location){
    const keywords = keyword.split(' ').join('+');
    const client_id = secrets.foursquare_client_id;
    const client_secret = secrets.foursquare_client_secret;
    const url = `https://api.foursquare.com/v2/venues/search?client_id=${client_id}&client_secret=${client_secret}&v=20130815&near=${location}&query=${keywords}&radius=100000&limit=5`;
    return fetch(url).then((response) => { return response.json()}).then((json) => (json.response.venues.slice(0,6)));
}

export function getWeather(lat, lng){
    const key = secrets.owm_key;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`;
    return fetch(url).then((response) => {return response.json()});
}

export function getStaticMapSrc(lat, lng){
    const key = secrets.static_maps_key;
    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lng},${lat}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lng}&key=${key}`;
    return url;
}