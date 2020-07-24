import { combineReducers } from 'redux';
import ui from 'core/ui/reducers';
import data from 'core/data/reducers';

const appReducer = combineReducers({
  data,
  ui,
});

export default (state, action) => {
  return appReducer(state, action);
};
