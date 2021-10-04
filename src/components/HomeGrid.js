import React from 'react'
import Link from 'next/link'
import styles from './HomeGrid.module.scss'

const HomeGrid = ({ gridItems }) => {
  return (
    <>
      {gridItems.map((gridItem, i) => (
        <Link href={gridItem.href} key={i} passHref>
          <a className={styles.card}>
            <h2>{gridItem.heading}</h2>
            <p>{gridItem.info}</p>
          </a>
        </Link>
      ))}
    </>
  )
}

export default HomeGrid