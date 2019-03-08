import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_REPO,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_ERROR
} from '../constants/repo';

import { fetchRepo as fetchRepoApi } from '../../requests/apiCall'


function* fetchRepo() {
  try {
    const payload = yield call(() => fetchRepoApi());
    yield put({ type: FETCH_REPO_SUCCESS, payload })
  } catch (error) {
    yield put({ type: FETCH_REPO_ERROR, error })
  }
}

function* repoSagaWatcher() {
  yield takeLatest(FETCH_REPO, fetchRepo)
}

export default repoSagaWatcher;