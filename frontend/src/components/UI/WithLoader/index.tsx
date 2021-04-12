import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

interface IWithLoader {
  loading: boolean
}

const WithLoader: React.FC<IWithLoader> = ({ loading, children }) => {
  return <>{loading ? <CircularProgress /> : <>{children}</>}</>
}

export default WithLoader
