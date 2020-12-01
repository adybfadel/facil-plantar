export default theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.border.main}`,
    fontSize: '.7em',
    textAlign: 'center',
  },
  content: {
    margin: '7px 5px 5px',
    
    [theme.breakpoints.up('sm')]: {
      marginTop: 17,
    },
  },
});
