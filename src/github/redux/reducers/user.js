import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  DISMISS_USER_ERROR
} from '../constants/user';

const initialState = {
	isFetchingUser: false,
  info: null,
  lastSuccessfulUserFetch: null,
	errorMsg: null
}

export default( state = initialState, action ) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_USER:
      return {
        isFetchingUser: true
       };
    case FETCH_USER_SUCCESS:
      return {
        info: { ...payload },
        lastSuccessfulUserFetch: new Date(),
        isFetchingUser: false
       };
    case FETCH_USER_ERROR:
      return {
        isFetchingUser: false,
        errorMsg: payload
       };
    case DISMISS_USER_ERROR:
      return {
        errorMsg: null
       };
    default:
      return state;
  }
}
