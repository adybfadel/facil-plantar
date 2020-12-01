export default theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    right: 0,
    left: 0,
    zIndex: 1000
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  badge: {
    backgroundColor: theme.palette.accent.dark,
  }
});