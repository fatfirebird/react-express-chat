import React from 'react'
import { Avatar, AvatarProps } from '@material-ui/core'

interface IUserAvatar extends AvatarProps {
  image?: string,
  username: string
}

const UserAvatar: React.FC<IUserAvatar> = (props) => {
  const { username, image } = props
  const userSymbols = username.slice(0, 2)

  return(
    <>
      {
        image 
        ?
        <Avatar alt={username} src={image} />
        :
        <Avatar>{ userSymbols }</Avatar>  
      }
    </>
    
  )
}

export default UserAvatar