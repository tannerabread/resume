import React from 'react'
import Container from './Container'
import styled from 'styled-components'

const Main = styled.main`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  )
}

export default Layout