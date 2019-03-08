import React from 'react'
import { Toolbar, Avatar, Button } from 'react-md'
import { fetchUser } from '../redux/actions/user';
import { fetchRepo } from '../redux/actions/repo';

import { connect } from 'react-redux';

const TopBar = ({ user, fetchUser, fetchRepo }) => {
  const updateAll = () => {
    fetchUser()
    fetchRepo()
  }
  const avatar = user.info
    ? <Avatar key='avt' src={user.info.avatar_url} />
    : <Avatar key='avt' />
  const name = user.info ? user.info.login : ''
  const button = <Button onClick={updateAll} icon>replay</Button>
  return (
    <Toolbar fixed colored nav={avatar} title={name} actions={button} />
  )
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { fetchUser, fetchRepo })(TopBar)
