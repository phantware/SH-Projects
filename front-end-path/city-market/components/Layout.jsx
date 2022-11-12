import { AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import useStyles from '../utils/styles'
import NextLink from 'next/link'

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>City Market</title>
      </Head>
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
    </div>
  )
}

export default Layout
