import styles from './Card.module.scss'

const Card = (props) => {
  let opts = {}
  opts = props.target 
    ? {"target": "blank", "rel": "noreferrer"}
    : {}

  return (
    <a className={styles.card} href={props.href} {...opts}>
      <h2>{props.heading} →</h2>
      <p className={styles.info}>{props.info}</p>
      {props.technologies 
        ? <p className={styles.technologies}>{props.technologies.join(` · `)}</p>
        : ''
      }
    </a>
  )
}

export default Card