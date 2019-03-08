import {
  FETCH_REPO,
  SELECT_REPO,
  UNSELECT_REPO,
  DISMISS_REPO_ERROR
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

export const dismissError = () => ({
	type: DISMISS_REPO_ERROR
})
