export default theme => ({
  dialog: {
    '& form': {
      margin: '0 auto',
      maxWidth: theme.constraints.maxWidth,
    }
  },
  content: {    
    flex: 'none',
    margin: '0 auto',
    maxWidth: theme.constraints.maxWidth,
    width: '87%',
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  buttonBox: {
    justifyContent: 'space-around',
    margin: theme.spacing(2),
  },
  textButton: {
    fontSize: '.65em',
  },
  message: {
    marginTop: theme.spacing(2),
  },

});
