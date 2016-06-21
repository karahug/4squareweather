import { combineReducers } from 'redux';
import {reducer as form } from 'redux-form';

import maps from './maps';

export default combineReducers({
   maps, form 
});