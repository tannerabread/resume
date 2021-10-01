import Layout from '../../components/Layout'
import projects from '../../data/projects.json'
import styles from './projects.module.scss'

const Projects = (pageProps) => {
  return (
    <Layout>
      <ul className={styles.List}>
        {projects.map((project, i) => (
          <li key={i}>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.name}
            </a>
            <p><strong>Description: </strong>{project.description}</p>
            <p><strong>Technologies:</strong>
              <ul className={styles.List}>
                {project.technologies.map((technology, j) => (
                  <li key={j}>{technology}</li>
                ))}
              </ul>
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Projects