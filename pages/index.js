import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="歡迎來到我的花園!" />
        <p className="description">
         <code>在小小的花園裡面挖呀挖呀挖</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
