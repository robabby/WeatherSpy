import Typography from 'typography'

import 'typeface-raleway'
import 'typeface-roboto'
import 'typeface-open-sans'

const config = {
  title: 'typography-theme-robabby',
  scaleRatio: 2.5,
  headerFontFamily: ['Raleway', 'sans-serif'],
  headerWeight: 800,
  bodyFontFamily: ['Open Sans', 'sans-serif']
}

const typography = new Typography(config)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
