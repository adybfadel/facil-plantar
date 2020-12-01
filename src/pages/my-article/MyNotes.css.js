export default theme => ({
  root: {
    maxHeight: 450,
    overflow: 'hidden',
    overflowY: 'auto',
    textAlign: 'center',
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
  list: {
    width: '85%',
    maxWidth: 540,
    margin: '0 auto',
    padding: `${theme.spacing(2)}px 0`,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  listItem: {
    padding: theme.spacing(0.5),
  },
  icon: {
    color: theme.palette.border.dark,
    marginRight: theme.spacing(2),
  },
  subheader: {
    backgroundColor: '#fff',
    color: theme.palette.secondary.main,
    fontSize: '1rem',
    lineHeight: `${theme.spacing(4)}px`,
  },
  alert: {
    color: theme.palette.accent.dark,
  },
  link: {
    textDecoration: 'none',
  }
});
