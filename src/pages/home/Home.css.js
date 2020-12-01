export default theme => ({
  content: {
    backgroundColor: 'white',
    padding: '60px 0',
    margin: '0 auto',
    maxWidth: theme.constraints.maxWidth,

    [theme.breakpoints.up('sm')]: {
      padding: '70px 0',
    }
  },
  toolbox: {
    flexGrow: 1,
    position: 'fixed',
    right: 0,
    top: 54,
    zIndex: 900,
    maxWidth: 480,
    width: '100%',
  },
  bottomNav: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
    borderTop: `1px solid ${theme.palette.primary.main}`,
  },
});