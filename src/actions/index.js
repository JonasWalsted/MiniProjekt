import streams from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_INFORMATION,
  FETCH_INFORMATIONS,



} from './types';



export const createInformation = formValues => async dispatch => {
  const response = await streams.post('/streams', formValues);

  dispatch({ type: CREATE_INFORMATION, payload: response.data });
};

export const fetchInformation = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_INFORMATIONS
, payload: response.data });
};








export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};
export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};

// Action creator
export const selectQuestion = question => {
  // Return an action
  return {
    type: 'AGEGROUP_SELECTED',
    payload: question
  };
};
