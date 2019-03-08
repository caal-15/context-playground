import { all } from 'redux-saga/effects'

import UserSaga from './user'
import ReposSaga from './repo'

export default function* Sagas() {
  yield all([
    UserSaga(),
    ReposSaga(),
  ])
}