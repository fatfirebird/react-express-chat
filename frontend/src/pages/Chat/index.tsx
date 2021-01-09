import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

const Chat: React.FC = () => {
  return(
    <Grid container spacing={3}>
      <Grid item xs={12} justify="center" alignItems="center">
        <Box justifyContent="center" alignItems="center">
          главная
        </Box>
      </Grid>
    </Grid>
  )
}

export default Chat