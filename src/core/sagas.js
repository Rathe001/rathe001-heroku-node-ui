import { all } from 'redux-saga/effects';
import uiSagas from 'core/ui/sagas';
import apiSagas from 'core/api/sagas';

const combinedSagas = [...uiSagas, ...apiSagas];

export default function* sagas() {
  yield all(combinedSagas);
}
