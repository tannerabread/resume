import styled from 'styled-components'

const StyledContainer = styled.div`
  min-height: calc(100vh - 75px);
  padding: 0 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background: radial-gradient(#90ACA0, #7b877d);

  @media (max-width: 600px) {
    padding: 0 2vw;
  }
`

const Container = (props) => {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  )
}

export default Container