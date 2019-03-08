import {
  FETCH_REPO,
  SELECT_REPO,
  UNSELECT_REPO
} from '../constants/repo';

export const fetchRepo = () => ({
	type: FETCH_REPO
})

export const selectRepo = (repo) => ({
  type: SELECT_REPO,
  payload: repo
})

export const unselectRepo = () => ({
	type: UNSELECT_REPO
})
