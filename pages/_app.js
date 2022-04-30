import '../styles/o.css'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Chirag&apos;s portfolio</title>
        <meta name="description" content="Hi! I&apos;m Chirag! A full stack developer from India. I&apos;m currently a student." />
        <link rel="icon" href="/favicon.png" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
