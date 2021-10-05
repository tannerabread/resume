import styled from 'styled-components'

const StyledContainer = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`

const Container = (props) => {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  )
}

export default Container