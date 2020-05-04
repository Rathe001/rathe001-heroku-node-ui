import { takeEvery, call, put } from 'redux-saga/effects';
import apiActions from './actions';

function* sendMessage({ payload }) {
  try {
    // const rs = yield call(window.ws.send, JSON.stringify({ message: 'dfhsdfh' }));
    // yield console.log(rs);
    // yield put(apiActions.sendMessageSuccess);
  } catch (e) {
    console.log(e);
    // yield put(apiActions.sendMessageFailure);
  }
}

export default [takeEvery(apiActions.SEND_MESSAGE, sendMessage)];
