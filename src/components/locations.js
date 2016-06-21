import React from 'react';
import { connect } from 'react-redux';

import { selectLocation } from '../action_creators';

export class Locations extends React.Component{
    render(){
        return(
          <div>
          {this.props.locations.map((location) =>(
            <div>
                <button onClick={() => {this.props.selectLocation(location)}} style={{backgroundColor: ((!!this.props.selected && location.id == this.props.selected.get('id')) ? "yellow" : "white")}}>{location.name}</button>
            </div>
          ))}
          </div>  
        );
    }
}

function mapStateToProps(state){
    return {
        locations: state.maps.get('locations'),
        selected: state.maps.get('selected')
    };
}


function mapDispatchToProps(dispatch){
    return {
        "selectLocation": (location) => {dispatch(selectLocation(location))}
    }
    
}
export const LocationsContainer = connect(mapStateToProps, mapDispatchToProps)(Locations);