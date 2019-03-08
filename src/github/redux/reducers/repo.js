import {
  FETCH_REPO,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_ERROR,
  DISMISS_REPO_ERROR,
  SELECT_REPO,
  UNSELECT_REPO,
} from '../constants/repo';

const initialState = {
	isFetchingRepos: false,
  repos: [],
  selectedRepo: null,
  lastSuccessfulReposFetch: null,
	errorMsg: null
}

export default( state = initialState, action ) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_REPO:
      return {
        ...initialState,
        isFetchingRepos: true
       };
    case FETCH_REPO_SUCCESS:
      return {
        ...initialState,
        repos: [ ...payload ],
        lastSuccessfulReposFetch: new Date(),
       };
    case FETCH_REPO_ERROR:
      return {
        isFetchingRepos: false,
        errorMsg: payload
       };
    case SELECT_REPO:
      return {
        ...state,
        selectedRepo: payload
       };
    case UNSELECT_REPO:
      return {
        ...state,
        selectedRepo: null
       };
    case DISMISS_REPO_ERROR:
      return {
        ...state,
        errorMsg: null
       };
    default:
      return state;
  }
}
