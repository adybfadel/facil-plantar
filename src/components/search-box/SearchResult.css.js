export default theme => ({
  root: {
    maxHeight: 450,
    overflow: 'hidden',
    overflowY: 'auto',
    textAlign: 'center',
  },
  list: {
    width: '85%',
    maxWidth: theme.constraints.maxWidth,
    margin: '0 auto',
    padding: `0 0 ${theme.spacing(2)}px`,
  },
  listItem: {
    display: 'initial',
    padding: `${theme.spacing(1)}px 0 0`,
  },
  resultTitle: {
    borderBottom: `1px solid ${theme.palette.accent.dark}`,
    marginBottom: 5,
    marginTop: 7,
  },
  section: {
    display: 'block',
    fontStyle: 'italic',
    marginTop: 7,
  },
  subsection: {
    color: theme.palette.accent.dark,
    fontStyle: 'italic',
  },
  searchKey: {
    backgroundColor: theme.palette.border.main,
    textDecoration: 'underline',
  },
});