import { takeEvery } from 'redux-saga/effects';
import uiActions from 'actions/uiActions';

function* init() {
  try {
    yield console.log('init');
  } catch {
    // Do nothing
  }
}

export default [
  takeEvery(uiActions.INIT, init),
];
