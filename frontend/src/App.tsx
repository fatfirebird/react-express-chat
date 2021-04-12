import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import Routes from './routes'

const App: React.FC = () => {
  useEffect(() => {
    console.log('auth check')
  }, [])

  return (
    <Container className="container">
      <Routes />
    </Container>
  )
}

export default App
