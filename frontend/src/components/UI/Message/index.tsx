import React from 'react'
import { Box, BoxProps, Typography } from '@material-ui/core'

import UserAvatar from '../Avatar'
import './index.scss'

interface IMessage extends BoxProps {
  isMine?: boolean
  username: string
}

const Message: React.FC<IMessage> = (props) => {
  const { isMine, children, username } = props

  return(
    <Box className="message" display="flex" alignItems="center" justifyContent={isMine && 'flex-end'}>
      <Box marginRight="16px">
        { !isMine && <UserAvatar username={username} /> }
      </Box>
      <Box className="message__text-container" padding="12px">
        <div className={`message__text-decoration ${isMine && 'message__text-decoration--hidden'}`}></div>
        <Typography className="message__text">{children}</Typography>
      </Box>
    </Box>
  )
}

export default Message