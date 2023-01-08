import Head from 'next/head'

import { Navbar, Footer } from './'

const Layout = ({ children }) => (
  <div className="layout">
    {/* set page title */}
    <Head>
      <title> misfitDodo</title>
    </Head>

    {/* render navbar */}
    <header>
      <Navbar />
    </header>

    {/* The children prop will contain the content of the page */}
    <main className="main-container">{children}</main>

    {/* render footer */}
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Layout
