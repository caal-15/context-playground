import React, { Component } from 'react'
import { CircularProgress, Snackbar } from 'react-md'

import TopBar from './TopBar'
import Sidebar from './Sidebar'
import { connect } from 'react-redux';

import { fetchUser, dismissError } from '../redux/actions/user';

class Layout extends Component {

  componentDidMount() {
    const { fetchUser, user } = this.props;
    const {  lastSuccessfulUserFetch } = user;
    const now = new Date();
    if (!lastSuccessfulUserFetch && !user.info) {
      fetchUser();
    } else if ((now - lastSuccessfulUserFetch) / 1000 > 300) {
      fetchUser();
    }
  }

  render() {
    const { user, children, dismissError } = this.props
    const { isFetchingUser, errorMsg } = user;
    const toasts = errorMsg ? [{ text: errorMsg }] :[]
    return (
      <div>
        {
          isFetchingUser
            ? <CircularProgress id='main-progress' />
            : <div>
              <TopBar />
              <div className='main-container'>
                <Sidebar />
                {children}
              </div>
            </div>
        }
        <Snackbar
          id='error-snackbar'
          toasts={toasts}
          onDismiss={dismissError}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { fetchUser, dismissError })(Layout)
