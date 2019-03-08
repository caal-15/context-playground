import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from '../constants/user';

const initialState = {
	isFetchingUser: false,
  info: null,
  lastSuccessfulUserFetch: null,
	error: false
}

export default( state = initialState, action ) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_USER:
      return {
        ...initialState,
        isFetchingUser: true
       };
    case FETCH_USER_SUCCESS:
      return {
        info: { ...payload },
        lastSuccessfulUserFetch: new Date(),
        isFetchingUser: false,
        error: false
       };
    case FETCH_USER_ERROR:
      return {
        ...initialState,
        isFetchingUser: false,
        error: true
       };
    default:
      return state;
  }
}
