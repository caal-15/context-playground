import user from './user';
import repo from './repo';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user,
  repo
});

export default rootReducer;