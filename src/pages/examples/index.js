import Layout from '../../components/Layout'
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

const Examples = ({ paths }) => {
  console.log(paths)
  return (
    <Layout>
      <h1>Example stuff here</h1>
      <ul>
        {paths.map((path, i) => (
          <li key={i}>
            <a href={path.replace("./src/pages", "").replace("/index.js", "")}>
              {path.replace("./src/pages/examples/", "").replace("/index.js", "")}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Examples