const palette = {
  white: '#FFFFFF',
  black: {
    primary: '#000000',
  },
  teal: {
    primary: 'teal',
  },
} as const

const theme = {
  primary: {
    default: palette.teal.primary,
  },
  background: {},
  border: {
    white: palette.white,
    black: palette.black.primary,
  },
  text: {
    white: palette.white,
    black: palette.black.primary,
  },
  shadow: {
    black: palette.black.primary,
  },
  fontSize: {
    title: '2.25rem', // 36px
    xxs: '0.625rem', // 10px
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    xxl: '1.5rem', // 24rem
  },
  minWidth: '1200px', // layout(tablet)
} as const

export default theme
