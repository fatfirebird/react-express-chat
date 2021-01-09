import React  from 'react'
import { Container } from '@material-ui/core'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <Container className="container">
      <Routes />
    </Container>
  )
}

export default App
