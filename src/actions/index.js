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
