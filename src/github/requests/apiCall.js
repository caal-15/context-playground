import { getUser, getRepos } from '.';

export function fetchUser() {
  return getUser
    .then(({ data }) => data)
    .catch(err => ({
        errorMsg: 'Could not fetch User :('
      })
    )
};

export function fetchRepo() {
  return getRepos
    .then(({ data }) => data)
    .catch(err => ({
        errorMsg: 'Could not fetch Repos :('
      })
    )
};