import styles from './Card.module.scss'

const Card = (props) => {
  console.log(props)
  return (
    <a className={styles.card} href={props.href}>
      <h2>{props.heading}</h2>
      <p>{props.info}</p>
      {props.technologies 
        ? <p>{props.technologies.join(` · `)}</p>
        : ''
      }
    </a>
  )
}

export default Card