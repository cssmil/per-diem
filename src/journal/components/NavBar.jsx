import { Logout, LogoutOutlined, MenuBookOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position='fixed'
      sx={{ 
        width: { sm: `calc(100% - ${ drawerWidth }px)`},
        ml: { sm: `${ drawerWidth }px`},
      }}
    >
      <Toolbar>
        <IconButton
          color = 'inherit'
          edge = 'start'
          sx = {{ mr: 2, display: { sm: 'none' }}}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography> JournalApp </Typography>
          <IconButton color='error'>
            <LogoutOutlined />
          </IconButton>

        </Grid>

      </Toolbar>

    </AppBar>
  )
}
