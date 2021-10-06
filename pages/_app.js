/* eslint-disable @next/next/no-css-tags */
import Head  from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Head>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
