export default theme => ({
  appBar: {
    position: 'fixed',
  },
  headerIcon: {
    marginLeft: -theme.spacing(2),
  },
  itemIcon: {
    marginRight: theme.spacing(1.5),
  },
  list: {
    margin: `${theme.spacing(7)}px auto`,
    maxWidth: theme.constraints.maxWidth,

    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(8)}px auto`,
    },
  }
});