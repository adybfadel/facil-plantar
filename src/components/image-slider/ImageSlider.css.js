export default theme => ({

  dialog: {
    margin: 5,
    maxHeight: 'calc(100% - 40px);',
    minHeight: 230,
    minWidth: 300,
  },
  header: {
    backgroundColor: theme.palette.border.dark,
    padding: `${theme.spacing(1)}px ${theme.spacing(1.5)}px`,

    '& h6': {
      color: '#fff',
      display: 'flex',
      fontSize: '1rem',
      justifyContent: 'space-between',
    }
  },
  button: {
    color: '#fff',
    padding: 0,
  },
  imageWrapper: {
    height: 193,
    width: 350,
    
    [theme.breakpoints.up('sm')]: {
      height: 270,
      width: theme.constraints.maxWidth,
    }
  },

});
