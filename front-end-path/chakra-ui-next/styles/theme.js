// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const fontWeights = {
  normal: 300,
  medium: 600,
  bold: 700,
}

const customTheme = extendTheme({ colors, fontWeights })

export default customTheme
