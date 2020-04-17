import { combineReducers } from 'redux';
import ui from 'core/ui/reducers';

const appReducer = combineReducers({
  ui,
});

export default (state, action) => {
  return appReducer(state, action);
};
