export default theme => ({
  root: {
    backgroundColor: 'white',
    margin: '0 auto',
    maxWidth: 640,
    paddingBottom: theme.spacing(1),
  },
  appBar: {
    position: 'fixed',
  },
  appBarIcon: {
    color: '#fff',
  },
  backButton: {
    marginLeft: -theme.spacing(2),
  },
  header: {
    margin: `${theme.spacing(7)}px auto 0`,
    maxWidth: theme.constraints.maxWidth,
    
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(8)}px auto 0`,
    },
  },
  headerTitle: {
    flex: 1,
  },
  image: {
    display: 'block',
    margin: '0 auto',
    maxWidth: 400,
    padding: theme.spacing(1),
    width: '90%',
  },
  content: {    
    flex: 'none',
    margin: `${theme.spacing(2.5)}px auto`,
    maxWidth: theme.constraints.maxWidth,
    width: '90%',
  },
  text: {
    margin: `${theme.spacing(1.5)}px 0`,
    textAlign: 'justify',
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
  link: {
    color: theme.palette.primary.main,

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
