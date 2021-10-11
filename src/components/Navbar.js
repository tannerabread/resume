import Link from 'next/link'
import styles from './Navbar.module.scss'


const Navbar = () => {

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logocontainer}>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.linkscontainer}>
          <Link href='/about'>
            <a className={styles.navlinks}>About</a>
          </Link>
          <Link href='/examples'>
            <a className={styles.navlinks}>Examples</a>
          </Link>
          <Link href='/projects'>
            <a className={styles.navlinks}>Projects</a>
          </Link>
          <Link href='/posts'>
            <a className={styles.navlinks}>Blog</a>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar