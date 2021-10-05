import sandbox from '../data/sandbox.json'
import Grid from './Grid'

const Examples = (props) => {
  const exampleArray = []
  sandbox.map((item, i) => {
    if (item.technologies.includes(props.filter)) { exampleArray.push(item) }
  })

  return (
    <>
      <Grid gridItems={exampleArray} />
    </>
  )
}

export default Examples