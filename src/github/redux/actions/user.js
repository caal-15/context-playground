import {
  FETCH_USER,
  DISMISS_USER_ERROR,
} from '../constants/user';

// Fetch user action
export const fetchUser = () => ({
	type: FETCH_USER
})

export const dismissError = () => ({
	type: DISMISS_USER_ERROR
})