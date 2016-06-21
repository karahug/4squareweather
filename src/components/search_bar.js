import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { setSearchTerms } from '../action_creators';

const onSubmit = (values, dispatch) => {
    dispatch(setSearchTerms(values.locationTerms, values.searchTerms));
};

export class SearchBar extends React.Component{
    render(){
        const searchTerms = this.props.fields.searchTerms;
        const locationTerms = this.props.fields.locationTerms;
        const handleSubmit = this.props.handleSubmit;
        return(
          <div class="search-bar-form" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="searchTerms" {...searchTerms}/>
                <input type="text" name="locationTerms" {...locationTerms}/>
                <input type="submit"/>
            </form>
          </div>  
        );
    }
}

function mapStateToProps(state){
    return {
    };
}

export const SearchBarContainer = reduxForm({
    form: 'searchBar',
    fields: ['searchTerms', 'locationTerms']
}, mapStateToProps)(SearchBar)