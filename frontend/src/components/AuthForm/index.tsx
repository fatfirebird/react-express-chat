import React, { useEffect, useState } from 'react'
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'

import { postAuth } from '../../redux/User'
import { IRootState } from '../../redux/store'
import WithLoader from '../UI/WithLoader'
import { requiredRule, minLength } from '../../utils/validation/rules'

interface IForm {
  name: string
  password: string
}

const AuthForm: React.FC = () => {
  const { error, isLoading } = useSelector((state: IRootState) => state.user)
  const [hasError, setError] = useState<boolean>(false)

  const { control, handleSubmit } = useForm<IForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  })

  const dispatch = useDispatch()

  useEffect(() => {
    setError(!!error)
  }, [error, isLoading])

  const submit = (data: IForm) => {
    dispatch(postAuth(data))
  }

  return (
    <Paper elevation={2}>
      <Snackbar
        open={hasError}
        onClose={() => setError(false)}
        autoHideDuration={4000}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        <MuiAlert elevation={6} variant="filled" severity="error">
          {error}
        </MuiAlert>
      </Snackbar>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="25px"
      >
        <Box marginBottom="25px">
          <Typography>Авторизуйтесь</Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit(submit)}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box marginBottom="25px">
            <Controller
              control={control}
              rules={{
                ...requiredRule(),
              }}
              name="name"
              render={({
                fieldState: { error, invalid },
                field: { onChange },
              }) => (
                <TextField
                  helperText={error?.message}
                  error={invalid}
                  label="Логин"
                  variant="outlined"
                  onChange={onChange}
                />
              )}
            />
          </Box>
          <Box marginBottom="25px">
            <Controller
              control={control}
              rules={{
                ...requiredRule(),
                ...minLength(6),
              }}
              name="password"
              render={({
                fieldState: { error, invalid },
                field: { onChange },
              }) => (
                <TextField
                  helperText={error?.message}
                  error={invalid}
                  label="Пароль"
                  variant="outlined"
                  type="password"
                  onChange={onChange}
                />
              )}
            />
          </Box>
          <WithLoader loading={isLoading}>
            <Box>
              <Button type="submit" variant="contained" color="primary">
                Войти
              </Button>
            </Box>
          </WithLoader>
        </Box>
      </Box>
    </Paper>
  )
}

export default AuthForm
