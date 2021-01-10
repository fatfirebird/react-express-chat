import React from 'react'
import { Box } from '@material-ui/core'
import { indigo } from '@material-ui/core/colors'

import Message from '../UI/Message'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/store'

const Chat: React.FC = () => {
  const { messages } = useSelector((state: IRootState) => state.chat)  

  return(
    <Box padding="10px" borderBottom={1} borderColor={indigo[500]}>
      {messages.map((message, id) => <Message key={id} username={message.username} isMine={message.isMine}>{message.text}</Message>)}
    </Box>
  )
}

export default Chat