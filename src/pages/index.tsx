import Head from 'next/head'
import PlaceHolder from '@/components/PlaceHolder/PlaceHolder'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Revive Recipe</title>
        <meta name="Revive Recipes the place" content="Get moving. Get going. Get Grooving." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PlaceHolder />
        <Footer />
      </main>
    </>
  )
};