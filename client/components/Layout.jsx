import Head from 'next/head'

import { Navbar, Footer } from './'

const Layout = ({ children }) => (
  <div className="layout">
    <Head>
      <title> misfitDodo</title>
    </Head>

    <header>
      <Navbar />
    </header>

    <main className="main-container">{children}</main>

    <footer>
      <Footer />
    </footer>
  </div>
)

export default Layout
