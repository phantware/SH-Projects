import {
  AppBar,
  Container,
  createMuiTheme,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import useStyles from '../utils/styles'
import NextLink from 'next/link'

const Layout = ({ children, title, description }) => {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      palette: {
        type: 'light',
        primary: {
          main: '#f0c000',
        },
        secondary: {
          main: '#208080',
        },
      },
    },
  })
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>{title ? ` ${title} City Market` : 'City Market'}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static' className={classes.navbar}>
          <Toolbar>
            <NextLink href='/'>
              <Typography className={classes.brand}>City Market</Typography>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href='/cart'>Cart</NextLink>
            </div>
            <div>
              <NextLink href='/login'>Login</NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. City Market.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  )
}

export default Layout
