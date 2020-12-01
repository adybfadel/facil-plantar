export default theme => ({
  root: {
    backgroundColor: 'white',
    margin: '0 auto',
    maxWidth: 640,
    padding: theme.spacing(7, 0, 2),
    
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 0, 2),
    },
  },
  toolbar: {
    padding: 0,
  },
  headerTitle: {
    flex: 1,
  },
  gridList: {
    flexWrap: 'nowrap',
  },
  imageBox: {
    margin: '0 auto',
    maxWidth: 400,
    padding: theme.spacing(1),
    position: 'relative',
  },
  image: {
    maxWidth: 400,
    width: '90%',
  },
  newImageButton: {
    color: theme.palette.accent.main,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  imagesButton: {
    color: theme.palette.accent.main,
    position: 'absolute',
    right: 40,
    top: 0,
  },
  actions: {
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
    borderTop: `1px solid ${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
    justifyContent: 'space-between',
    margin: theme.spacing(2, 1, 1),
    padding: 0,
    width: '100%',
  },
  actionLabel: {
    flexDirection: 'column',
    fontSize: '.8rem',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    maxWidth: theme.constraints.maxWidth,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    '& [disabled]': {
      color: theme.palette.primary.main,
    },
  },
  fieldIcon: {
    color: theme.palette.primary.main,
  },
  inputImage: {
    width: 1,
    height: 1,
    opacity: 0,
    position: 'absolute',
    overflow: 'hidden',
    zIndex: -1,
  },
  sliderField: {
    margin: theme.spacing(2, 1, 1),
    width: '97%'
  },
  sliderLabel: {
    color: theme.palette.border.dark,
    fontSize: '.8rem',
  },
  sliderControl: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: theme.spacing(1),
    width: '100%',
  },
  slider: {
    padding: theme.spacing(2, 0),
    width: '60%',
    touchAction: 'none',
  },
  sliderIcon: {
    color: theme.palette.accent.dark,
  },
});
