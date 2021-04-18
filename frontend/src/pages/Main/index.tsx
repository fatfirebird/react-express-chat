import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'

import Chat from '../../components/ChatContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/User'
import { IRootState } from '../../redux/store'
import WithLoader from '../../components/UI/WithLoader'

const Main: React.FC = () => {
  const { isAuthorized, id, isLoading } = useSelector(
    (state: IRootState) => state.user
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuthorized && id) {
      dispatch(getUser(id))
    }
  }, [isAuthorized, id])

  return (
    <WithLoader loading={isLoading}>
      <Grid
        className="container container--height"
        justify="center"
        alignItems="center"
        container
        spacing={6}
      >
        <Grid
          className="chat-container"
          item
          xs={12}
          justify="center"
          alignItems="center"
        >
          <Chat />
        </Grid>
      </Grid>
    </WithLoader>
  )
}

export default Main
