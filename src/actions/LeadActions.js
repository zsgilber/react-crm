import leadApi from '../api/leadApi';
import * as types from './actionTypes';

export function loadLeads() {
  return function(dispatch) {
    return leadApi.getLeads().then(leads => {
      dispatch(loadLeadsSuccess(leads));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadLeadsSuccess(leads) {
  return {type: type.LOAD_LEADS_SUCCESS, leads};
}
