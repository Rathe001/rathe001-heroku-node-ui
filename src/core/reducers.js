import { combineReducers } from 'redux';
import ui from 'core/ui/reducers';
import data from 'core/data/reducers';
import users from 'core/users/reducers';
import user from 'core/user/reducers';

const appReducer = combineReducers({
  data,
  ui,
  user,
  users,
});

export default (state, action) => {
  return appReducer(state, action);
};
