import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function leadReducer(state = initialState.leads, action) {
  switch(action.type) {
    case types.LOAD_LEADS_SUCCESS:
      return action.leads
    default:
      return state;
  }
}
