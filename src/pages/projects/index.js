import Layout from '../../components/Layout'
import projects from '../../data/projects.json'

const Projects = (pageProps) => {
  return (
    <Layout>
      <ul>
        {projects.map((project, i) => (
          <li key={i}>
            <a href={project.url}>{project.name}</a>
            <p><strong>Description: </strong>{project.description}</p>
            <p><strong>Technologies: </strong>{project.technologies}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Projects