import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import useStyles from '../utils/styles'

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>City Market</title>
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <Typography>City Market</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. City Market.</Typography>
      </footer>
    </div>
  )
}

export default Layout
