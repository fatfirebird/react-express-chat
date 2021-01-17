import React from 'react'
import { Grid} from '@material-ui/core'

import AuthForm from '../../components/AuthForm'

const Auth: React.FC = () => {
  return(
    <Grid className="container container--height" justify="center" alignItems="center" container spacing={6}>
      <Grid item xs={12} sm={6} justify="center" alignItems="center">
        <AuthForm />
      </Grid>
    </Grid>
  )
}

export default Auth