import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import meetup from './meetup/reducer';

const reducers = combineReducers({
  auth,
  user,
  meetup,
});

export default reducers;
