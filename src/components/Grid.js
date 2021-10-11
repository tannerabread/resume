import styles from './Grid.module.scss'
import Card from './Card'
import Link from 'next/link'

const Grid = (props) => {

  return (
    <>
      <div className={styles.grid}>
        {props.gridItems.map((gridItem, i) => (
          <Link href={gridItem.url} key={i} passHref>
            <Card heading={gridItem.heading} 
                info={gridItem.info} 
                technologies={gridItem.technologies} 
                target={props.target}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Grid