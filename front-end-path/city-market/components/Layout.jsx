import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>City Market</title>
      </Head>
      <AppBar position='static'>
        <Toolbar>
          <Typography>City Market</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  )
}

export default Layout
