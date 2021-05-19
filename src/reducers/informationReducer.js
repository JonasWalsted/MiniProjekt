import _ from 'lodash';
import {
  FETCH_INFORMATIONS,
  CREATE_INFORMATION,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_INFORMATIONS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case CREATE_INFORMATION:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
