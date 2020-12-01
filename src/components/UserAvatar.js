import React from 'react';
import { makeStyles } from '@material-ui/core';

import { 
  Avatar 
} from '@material-ui/core';

import { 
  AccountCircle,
  AccountCircleOutline,
} from 'mdi-material-ui';

const styles = theme => ({
  avatar: {
    height: theme.spacing(3),
    width: theme.spacing(3),
    marginRight: theme.spacing(1),
  }
});
const useStyles = makeStyles(styles);

const UserAvatar = ({ user }) => {
  const classes = useStyles();
  if (user && user.photoUrl) {
    return <Avatar alt={user.name || user.email} src={user.photoUrl} className={classes.avatar} />;
  } else if (user) {
    return <AccountCircle className={classes.avatar} />;
  }
  return <AccountCircleOutline className={classes.avatar} />;
}

export default UserAvatar;