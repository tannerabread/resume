import styles from './Contacts.module.css'

const Contacts = ({ contacts }) => {
  return (
    <>
      <ul className={styles.contactList}>
        {contacts.map((contact, i) => (
          <li key={i}>
            <strong>{contact.name}: </strong> 
            <a href={contact.link} className={styles.contactLink}>{contact.linkText}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Contacts