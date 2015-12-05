import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVert from 'material-ui/lib/svg-icons/navigation/more-vert';




export default class Header extends React.Component {

  render() {
// <h2>This is header</h2>
    return <div>

      <AppBar
        title="Elite Global Academy LLC"
        //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={
          <IconMenu iconButtonElement={
              <IconButton><MoreVert /></IconButton>
            }>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        } />
      </div>
    }
  }
