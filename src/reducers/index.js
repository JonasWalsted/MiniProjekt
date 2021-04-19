import { combineReducers } from 'redux';
import authReducer from './authReducer';


const agegroup = () => {
  return [
    { title: '0 - 6 år' },
    { title: '7 - 9 år' },
    { title: '10 - 13 år' },
    { title: 'Over 14 år' }
  ];
};


const agegroupReducer = (selectedAgeGroup = null, action) => {
  if (action.type === 'AGEGROUP_SELECTED') {
    return action.payload;
  } else {
    return selectedAgeGroup;
  }
};








export default combineReducers({
    auth: authReducer,

    ageGroups: agegroup,
    selectedAgeGroup: agegroupReducer,


});
