import React from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import projects from '../../data/projects.json'
import styles from './projects.module.scss'

const Projects = (pageProps) => {
  const sortedProjects = projects.sort(function(a, b){
    return b.date - a.date
  })

  return (
    <Layout>
      <Title
        heading="Projects"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/projects/index.js"
        style={{
          fontFamily: "'Fontdiner Swanky', cursive",
          filter: "drop-shadow(2px 2px 10px #FFF)",
          background: "linear-gradient(to right, rgba(0,252,164,1), rgba(138,135,255,1))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      />

      <ul className={styles.List}>
        {sortedProjects.map((project, i) => (
          <li key={i}>
            <a href={project.url} target="_blank" rel="noreferrer" className={styles.ProjectList}>
              {project.name}
            </a>
            {project.code ?
              <>
                <br />
                <a href={project.code} target="_blank" rel="noreferrer" className={styles.CodeLink}>
                  Click here to view code for this project
                </a>
              </>
              : ""
            }
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