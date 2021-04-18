import React from 'react'
import { Container } from '@material-ui/core'
import Routes from './routes'
import Header from './components/Header'
import { useSelector } from 'react-redux'
import { IRootState } from './redux/store'

const App: React.FC = () => {
  const { isAuthorized } = useSelector((state: IRootState) => state.user)

  return (
    <>
      {isAuthorized && <Header />}
      <Container className="container">
        <Routes />
      </Container>
    </>
  )
}

export default App
