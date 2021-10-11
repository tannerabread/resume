import styled from 'styled-components'

const StyledHeading = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    max-width: 80vw;
  }
`

const StyledSubheading = styled.a`
  color: #0070f3;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`

const Title = (props) => {
  return (
    <>
      <StyledHeading>{props.heading}</StyledHeading>
      <StyledSubheading href={props.href} target="_blank" rel="noreferrer">
        {props.subheading}
      </StyledSubheading>
    </>
  )
}

export default Title