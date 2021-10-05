import React from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import projects from '../../data/projects.json'
import styles from './projects.module.scss'

const Projects = (pageProps) => {
  return (
    <Layout>
      <Title
        heading="Projects"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/projects/index.js"
      />
      <ul className={styles.List}>
        {projects.map((project, i) => (
          <li key={i}>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.name}
            </a>
            <p><strong>Description: </strong>{project.description}</p>
            <p><strong>Technologies:</strong></p>
              <ul className={styles.TechnologyList}>
                {project.technologies.map((technology, j) => (
                  <li key={j}>{technology}</li>
                ))}
              </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Projects