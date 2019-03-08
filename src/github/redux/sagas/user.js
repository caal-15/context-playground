import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from '../constants/user';

import { fetchUser as fetchUserApi } from '../../requests/apiCall'


function* fetchUser() {
  try {
    const payload = yield call(() => fetchUserApi());
    yield put({ type: FETCH_USER_SUCCESS, payload })

  } catch (error) {
    yield put({ type: FETCH_USER_ERROR, error })
  }
}

function* userSagaWatcher() {
  yield takeLatest(FETCH_USER, fetchUser)
}

export default userSagaWatcher;