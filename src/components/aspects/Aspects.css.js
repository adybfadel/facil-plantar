export default theme => ({
  aspects: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '7px 0',
    width: '100%',
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