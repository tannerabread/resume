import styled from 'styled-components'

const StyledHeading = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: calc(4px + 10vmin);
  text-align: center;

  @media (max-width: 768px) {
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
      <StyledHeading style={props.style}>{props.heading}</StyledHeading>
      <StyledSubheading href={props.href} target="_blank" rel="noreferrer">
        {props.subheading}
      </StyledSubheading>
    </>
  )
}

export default Title