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

  const currentDate = new Date()
  const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`

  return(
    <Box className="message" display="flex" alignItems="center" justifyContent={isMine && 'flex-end'}>
      <Box marginRight="16px">
        { !isMine && <UserAvatar username={username} /> }
      </Box>
      <Box>
        {!isMine && <Typography variant="body2">{username}</Typography>}
        <Box display="flex">
          <Box className="message__text-container" padding="12px" marginRight="4px">
            <div className={`message__text-decoration ${isMine && 'message__text-decoration--hidden'}`}></div>
            <Typography className="message__text">{children}</Typography>
          </Box>
          <Box alignSelf="flex-end">
            <Typography variant="caption">{currentTime}</Typography>
          </Box>
        </Box>
      </Box>  
    </Box>
  )
}

export default Message