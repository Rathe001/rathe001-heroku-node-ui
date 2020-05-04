import { takeEvery, call, put } from 'redux-saga/effects';
import apiActions from './actions';

function* sendMessage({ payload, request }) {
  try {
    const rs = yield call(request, JSON.stringify(payload));
    yield put(apiActions.sendInputSuccess(rs));
  } catch (e) {
    yield put(apiActions.sendInputFailure(e));
  }
}

export default [takeEvery(apiActions.SEND_INPUT, sendMessage)];
