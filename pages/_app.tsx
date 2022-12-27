import Head from 'next/head';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';

function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
        <title>Blog</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default App;
