import '../styles/globals.css'
import { TaxiProvider } from '../context/taxContext'
function MyApp({ Component, pageProps }) {
  return <TaxiProvider> <Component {...pageProps} /> </TaxiProvider>
}

export default MyApp
