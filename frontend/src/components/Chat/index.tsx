import React, { useEffect, useRef } from 'react'
import { Box, RootRef } from '@material-ui/core'
import { indigo } from '@material-ui/core/colors'
import { useSelector } from 'react-redux'

import Message from '../UI/Message'
import { IRootState } from '../../redux/store'
import './index.scss'

const Chat: React.FC = () => {
  const { messages } = useSelector((state: IRootState) => state.chat)
  const chatElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (chatElement) {
      const scrollHeight = chatElement.current?.scrollHeight
      chatElement.current?.scroll({ top: scrollHeight, behavior: 'smooth' })
    }
  }, [messages])

  return (
    <RootRef rootRef={chatElement}>
      <Box
        className="chat"
        padding="10px"
        borderBottom={1}
        borderColor={indigo[500]}
      >
        {messages.map((message, id) => (
          <Message key={id} username={message.username} isMine={message.isMine}>
            {message.text}
          </Message>
        ))}
      </Box>
    </RootRef>
  )
}

export default Chat
