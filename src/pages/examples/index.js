import Layout from '../../components/Layout'
import Title from '../../components/Title'
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {
  const dir = './src/pages/examples'
  const files = fs.readdirSync(dir)
  const paths = []

  const recursiveFunction = (currentFile, currentDir) => {
    const stat = fs.lstatSync(path.join(currentDir, currentFile))
    let fullPath = `${currentDir}/${currentFile}`

    if (stat.isDirectory()) {
      const innerFiles = fs.readdirSync(fullPath)
      for (const innerfile of innerFiles) {
        recursiveFunction(innerfile, fullPath)
      }
    } else {
      paths.push(fullPath)
    }
  }
  
  for (const file of files) {
    if (file == 'index.js') { continue }
    recursiveFunction(file, dir)
  }

  return {
    props: {
      paths
    }
  }
}

const ExamplePage = ({ paths }) => {
  console.log(paths)
  return (
    <Layout>
      <Title 
        heading="Examples"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/examples/index.js"
      />

      <ul>
        {paths.map((path, i) => (
          <li key={i} style={{listStyleType: "none", textDecoration: "underline", color: "yellow"}}>
            <a href={path.replace("./src/pages", "").replace("/index.js", "")}>
              {path.endsWith('/index.js')
              ? path.replace("./src/pages/examples/", "").replace("/index.js", "").toUpperCase()
              : path.replace("./src/pages/examples/", "").replace(".js", "").toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default ExamplePage