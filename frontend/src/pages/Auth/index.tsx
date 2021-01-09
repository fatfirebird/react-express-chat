import React from 'react'
import { Grid, Box, Typography, TextField, Paper, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/user'

const Auth: React.FC = () => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    console.log('123')
    dispatch(login())
  }

  return(
    <Grid className="auth-container" justify="center" alignItems="center" container spacing={6}>
      <Grid item xs={12} sm={6} justify="center" alignItems="center">
        <Paper elevation={2}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="25px">
            <Box marginBottom="25px">
              <Typography>Авторизуйтесь</Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center">
              <Box marginBottom="25px">
                <TextField label="Логин" variant="outlined"></TextField>
              </Box>
              <Box marginBottom="25px">
                <TextField label="Пароль" variant="outlined"></TextField>
              </Box>
              <Box>
                <Button onClick={handleSubmit} variant="contained" color="primary">Войти</Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Auth