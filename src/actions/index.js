import streams from '../apis/streams'

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

export const createStream = formValues => async dispatch => {
const response = await  streams.post('/streams', formValues);
};
