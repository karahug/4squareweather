import React from 'react';
import { connect } from 'react-redux';

import { LocationsContainer } from './locations';
import { LocationInfo } from './location_info';
import { SearchBarContainer } from './search_bar';

export class App extends React.Component {
    render() {
        
        const locations = !!this.props.locations ? <LocationsContainer/> : '';
        const locationInfo = (!!this.props.selected && !!this.props.selected.get('location')) ? <LocationInfo location={this.props.selected} weather={this.props.weather}/> : '';
        return (
            <div className="app">
                <SearchBarContainer />
                { locations }
                { locationInfo }
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
      locations: state.maps.get('locations'),
      selected: state.maps.get('selected'),
      weather: state.maps.get('weather')
    };
}

export const AppContainer = connect(mapStateToProps)(App);