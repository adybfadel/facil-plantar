export default theme => ({
  messageEmpty: {
    marginTop: theme.spacing(16),
  },
  link: {
    textDecoration: 'none',
  },
  card: {
    margin: 5,
    width: '100%',
    maxWidth: 420,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  subtitle: {
    marginBottom: 7,
  },
  cardContent: {
    paddingBottom: 0,
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  aspects: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '7px 0',
  },
  aspectLabel: {
    display: 'inline',
    fontSize: '1.15em',
  },
  aspectIcon: {
    fontSize: '1.2em',
  },
  disabled: {
    color: theme.palette.border.main,
  },
  difficulty: {
    color: theme.palette.primary.main,
  },
  luminosity: {
    color: theme.palette.accent.main,
  },
  humidity: {
    color: theme.palette.secondary.main,
  },
  growing: {
    color: theme.palette.primary.dark,
  },
});