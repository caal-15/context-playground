import React, { Component } from 'react'
import { CircularProgress } from 'react-md'

import { connect } from 'react-redux';
import RepoList from './RepoList'
import RepoDetail from './RepoDetail'

import { fetchRepo, selectRepo, unselectRepo } from '../redux/actions/repo';

class Repos extends Component {
  componentDidMount() {
    const { fetchRepo, repo } = this.props

    const now = new Date()
    if (!repo.lastSuccessfulReposFetch) {
      fetchRepo()
    } else if ((now - repo.lastSuccessfulReposFetch) / 1000 > 300) {
      fetchRepo()
    }
  }

  render() {
    const {
      repo,
      selectRepo,
      unselectRepo
    } = this.props;
    const {
      isFetchingRepos,
      repos,
      selectedRepo
     } = repo;
    return (
      isFetchingRepos
        ? <CircularProgress id='repos-progress' />
        : selectedRepo
          ? <RepoDetail repo={selectedRepo} unselectRepo={unselectRepo} />
          : <RepoList repos={repos} selectRepo={selectRepo} />
    )
  }
}

const mapStateToProps = ({ repo }) => ({ repo });
const actions = {
  fetchRepo,
  selectRepo,
  unselectRepo,
};

export default connect(mapStateToProps, actions)(Repos)
