import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'


const Navbar = () => {
  const [isActive, setActive] = useState("false")

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      <nav className={isActive ? `${styles.navbar}` : `${styles.navbar} ${styles.responsive}`}>
        <div className={styles.logocontainer}>
          <Link href='/'>
            <a onClick={handleToggle}>Home</a>
          </Link>
        </div>
        <div className={isActive ? `${styles.linkscontainer}` : `${styles.linkscontainer} ${styles.responsive}`}>
          <Link href='/about'>
            <a className={styles.navlinks} onClick={handleToggle}>About</a>
          </Link>
          <Link href='/examples'>
            <a className={styles.navlinks} onClick={handleToggle}>Examples</a>
          </Link>
          <Link href='/projects'>
            <a className={styles.navlinks} onClick={handleToggle}>Projects</a>
          </Link>
          <Link href='/posts'>
            <a className={styles.navlinks} onClick={handleToggle}>Blog</a>
          </Link>
          <button className={styles.icon} onClick={handleToggle}>☰</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar