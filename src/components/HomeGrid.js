import Link from 'next/link'
import styled from 'styled-components'

const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;
`

const HomeGrid = ({ gridItems }) => {
  return (
    <>
      {gridItems.map((gridItem, i) => (
        <Link href={gridItem.href} key={i} passHref>
          <Card>
            <h2>{gridItem.heading} &rarr;</h2>
            <p>{gridItem.info}</p>
          </Card>
        </Link>
      ))}
    </>
  )
}

export default HomeGrid