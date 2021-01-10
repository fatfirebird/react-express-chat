import { Box, Paper } from '@material-ui/core'
import React from 'react'

import InputMessage from '../UI/InputMessage'
import Chat from '../Chat'

const ChatContainer: React.FC = () => {
  return(
    <Paper elevation={2}>
      <Box display="flex" flexDirection="column">
        <Box>
          <Chat />
        </Box>
        <Box>
          <InputMessage />
        </Box>
      </Box>
    </Paper>
  )
}

export default ChatContainer