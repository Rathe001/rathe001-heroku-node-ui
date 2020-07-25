import { takeEvery, call } from 'redux-saga/effects';
import apiActions from './actions';

function* send({ payload, request }) {
  yield call(request, JSON.stringify(payload));
}

export default [
  takeEvery(apiActions.SEND, send),
  takeEvery(apiActions.MOVE_UP, send),
  takeEvery(apiActions.MOVE_DOWN, send),
  takeEvery(apiActions.MOVE_LEFT, send),
  takeEvery(apiActions.MOVE_RIGHT, send),
];
