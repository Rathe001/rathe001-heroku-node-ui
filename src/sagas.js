import { all } from 'redux-saga/effects';
import apiSagas from 'sagas/levelSagas';
import uiSagas from 'sagas/uiSagas';

const combinedSagas = [...apiSagas, ...uiSagas];

export default function* sagas() {
  yield all(combinedSagas);
}
