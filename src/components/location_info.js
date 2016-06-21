import React from 'react';
import { getStaticMapSrc } from '../util/api';

export class LocationInfo extends React.Component {
    render() {
        const mapImage = getStaticMapSrc(this.props.location.get('location').get('lat'), this.props.location.get('location').get('lng'));
        const weather = !!this.props.weather ? (<div><span>Temperature: {(this.props.weather.get('main').get('temp') -273)*1.8+32} F </span><br/><span> Humidity: {this.props.weather.get('main').get('humidity')} % </span></div>) : 'Loading weather';
        return(
            <div>
                {weather}
                <img src={ mapImage }/>
            </div>
        );
    }
}