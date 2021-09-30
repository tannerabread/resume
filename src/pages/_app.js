import '../globals.css'

function MyApp({ Component, pageProps }) {
  console.log('stuff')
  return <Component {...pageProps} />
}

export default MyApp
