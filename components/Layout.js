import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div className="next-container">
          <Head>
            <title>Chirag's portfolio</title>
            <meta name="description" content="Chirag's portfolio" />
            <link rel="icon" href="/favicon.png" />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <main className="main">
              {children}
          </main>
        </div>
      )
}

export default Layout;