import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div className="next-container">
          <main className="main">
              {children}
          </main>
        </div>
      )
}

export default Layout;