import React from 'react'
import { Grid } from '@material-ui/core'

import Chat from '../../components/ChatContainer'

const Main: React.FC = () => {
  return(
    <Grid className="container container--height" justify="center" alignItems="center" container spacing={6}>
      <Grid className="chat-container" item xs={12} justify="center" alignItems="center">
        <Chat />
      </Grid>
    </Grid>
  )
}

export default Main