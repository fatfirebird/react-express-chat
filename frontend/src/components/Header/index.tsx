import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/User'

const Header: React.FC = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" width="100%" justifyContent="space-between">
          <Typography variant="h6">Chat</Typography>
          <Button color="inherit" onClick={handleLogout}>
            Выйти
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
