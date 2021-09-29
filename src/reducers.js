import { combineReducers } from 'redux';
import level from 'reducers/levelReducer';
import ui from 'reducers/uiReducer';

const appReducer = combineReducers({
  level,
  ui,
});

export default (state, action) => appReducer(state, action);
