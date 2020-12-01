export default theme => ({
  root: {
    textAlign: 'center',
  },
  filterForm: {
    width: '85%',
    maxWidth: theme.constraints.maxWidth,
    margin: 10,

    [theme.breakpoints.up('sm')]: {
      marginTop: 17,
    },
  },
});
