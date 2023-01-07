import { Toaster } from 'react-hot-toast'

import { Layout } from '../components'
import '../styles/globals.css'
import { StateContext } from '../context/StateContext'

// App function is the top-level component for the application
// It receives a 'Component' prop, which is the current page being rendered,
// and 'pageProps', which contains props passed to the current page
export default function App({ Component, pageProps }) {
  // Render the Layout component with the current page inside it
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
