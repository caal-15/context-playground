import React from 'react'
import { Drawer, List, ListItem, Avatar, FontIcon } from 'react-md'

import { connect } from 'react-redux';

const Sidebar = ({ user }) => (
  user && user.info
  ? <Drawer
    className='sidebar'
    type={Drawer.DrawerTypes.PERSISTENT}
    visible
    onMediaTypeChange={() => {}}
    onVisibilityChange={() => {}}
  >
    <List>
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>favorite</FontIcon>}/>}
        primaryText="Following"
        secondaryText={user.info.following}
      />
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>group</FontIcon>}/>}
        primaryText="Followers"
        secondaryText={user.info.followers}
      />
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>folder_special</FontIcon>}/>}
        primaryText="Public Repos"
        secondaryText={user.info.public_repos}
      />
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>local_activity</FontIcon>}/>}
        primaryText="Public Gists"
        secondaryText={user.info.public_gists}
      />
    </List>
  </Drawer>
  : null
)

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Sidebar)
