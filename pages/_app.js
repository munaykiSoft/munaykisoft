import Head from 'next/head';
import '../styles/globals.css';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head >
        <title>MunaykiSoft - Perú</title>
      </Head>
      <Header />
      <main className="container mt-5">
        <Component {...pageProps} />  
      </main>
      <Footer />
    </>
  )
}

export default MyApp
