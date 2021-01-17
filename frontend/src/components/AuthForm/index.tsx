import React from 'react'
import { Paper, Box, Typography, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { login } from '../../redux/actions/user'

const AuthForm: React.FC = () => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    console.log('123')
    dispatch(login())
  }

  return(
    <Paper elevation={2}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="25px">
        <Box marginBottom="25px">
          <Typography>Авторизуйтесь</Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center">
          <Box marginBottom="25px">
            <TextField label="Логин" variant="outlined" />
          </Box>
          <Box marginBottom="25px">
            <TextField label="Пароль" variant="outlined" />
          </Box>
          <Box>
            <Button onClick={handleSubmit} variant="contained" color="primary">Войти</Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default AuthForm