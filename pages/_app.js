import Head from 'next/head';
import '../styles/globals.css';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter( )
  console.log(pathname)

  return (
    <>
      <Head >
        <title>MunaykiSoft - Perú</title>
      </Head>
      <Header />
      <main className="container mt-5">
        <Component {...pageProps} />  
      </main>
      {/* <Footer /> */}
      {
	      pathname != '/contact' ? <Footer /> : <div>hola</div>
      }
    </>
  )
}

export default MyApp
