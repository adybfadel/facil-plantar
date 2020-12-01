export default theme => ({
  root: {    
    margin: '0 auto',
    width: '96%',
  },
  infoPanel: {
    boxShadow: 'none',
  },
  taksSummary: {
    padding: 0,
  },
  infoDetails: {
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  listItem: {
    marginBottom: theme.spacing(1) / 2,
    padding: `${theme.spacing(1)}px 0 0`,
  },
  itemText: {
    flex: 'none',
    padding: `0 ${theme.spacing(1) / 2}px`,
  },
  listIcon: {
    color: theme.palette.primary.light,
    fontSize: `1.2rem`,
    margin: `0 ${theme.spacing(1)}px -${theme.spacing(1) / 2}px` ,
  },
  listSubHeader: {
    color: theme.palette.accent.dark,
    lineHeight: `${theme.spacing(4)}px`,
    padding: 0,
  },
});
