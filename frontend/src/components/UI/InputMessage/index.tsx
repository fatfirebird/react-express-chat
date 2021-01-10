import { Box, Button, TextareaAutosize } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage, SEND_MESSAGE } from '../../../redux/actions/chat'

import './index.scss'

const InputMessage: React.FC = () => {
  const [userMessage, setUserMessage] = useState<string>()
  const dispatch = useDispatch()


  const send = () => {
    if (userMessage && userMessage.length > 0) {
      dispatch(sendMessage(SEND_MESSAGE, { username: 'ffb', isMine: true, text: userMessage }))
      setUserMessage('')
    }
  }

  return(
    <Box className="input-message" display="flex" alignItems="center" padding="10px">
      <TextareaAutosize onChange={(e) => setUserMessage(e.target.value)} value={userMessage} className="input-message__textarea" rowsMin={2} placeholder="Введите сообщение" />
      <Box className="input-message__button-container" alignSelf="flex-end">
        <Button 
          className="input-message__button"
          onClick={send}
          variant="contained"
          size="large"
          color="primary"
          endIcon={<SendIcon />}
        >
          Отправить
        </Button>
      </Box>
    </Box>
  )
}

export default InputMessage