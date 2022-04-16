import { combineReducers } from 'redux';
import { commonReducer } from './common';
import { userReducer } from './user';

const reducer = {
  common: commonReducer,
  user: userReducer,
};

const rootReducer = combineReducers(reducer);

export default rootReducer;
