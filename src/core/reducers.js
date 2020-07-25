import { combineReducers } from 'redux';
import ui from 'core/ui/reducers';
import data from 'core/data/reducers';
import players from 'core/players/reducers';

const appReducer = combineReducers({
  data,
  players,
  ui,
});

export default (state, action) => {
  return appReducer(state, action);
};
