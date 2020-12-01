import React from 'react';
import { intlShape } from 'react-intl';
import { makeStyles } from '@material-ui/core';

import {
  IconButton,
  MenuItem,
  Menu,
} from '@material-ui/core';

import { 
  Login, 
  Logout,
  Settings,
  DotsVertical,
  Help,
} from 'mdi-material-ui';

import styles from './MainMenu.css';
import UserAvatar from '../UserAvatar';

const useStyles = makeStyles(styles);

const propTypes = {
  intl: intlShape.isRequired,
};

const MainMenu = ({
  
  intl,
  user,
  onItemClick,

}) => {

  const [ anchor, setAnchor ] = React.useState();
  const classes = useStyles();

  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        className={classes.mainIcon}
        onClick={event => setAnchor(event.currentTarget)}
      >
        <DotsVertical />
      </IconButton>
      <Menu
        open={!!anchor}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClick={() => setAnchor(null)}
        onClose={() => setAnchor(null)}
      >
        <MenuItem onClick={() => onItemClick('profile')} disabled={!user}>
          <UserAvatar user={user} />
          {intl.formatMessage({id:'MainMenu.profile'})}
        </MenuItem>
        <MenuItem onClick={() => onItemClick('settings')}>
          <Settings className={classes.menuIcon} />
          {intl.formatMessage({id:'MainMenu.settings'})}
        </MenuItem>
        <MenuItem onClick={() => onItemClick('help')}>
          <Help className={classes.menuIcon} />
          {intl.formatMessage({id:'MainMenu.help'})}
        </MenuItem>
        {
          user ?
            <MenuItem onClick={() => onItemClick('logout')}>
              <Logout className={classes.menuIcon} />
              {intl.formatMessage({id:'MainMenu.logout'})}
            </MenuItem>
          :
            <MenuItem onClick={() => onItemClick('login')}>
              <Login className={classes.menuIcon} />
              {intl.formatMessage({id:'MainMenu.login'})}
            </MenuItem>
        }
      </Menu>
    </React.Fragment>
  );
}

MainMenu.propTypes = propTypes;

export default MainMenu;