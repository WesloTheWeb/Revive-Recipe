import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import PlaceHolder from '@/components/PlaceHolder/PlaceHolder'

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

      </main>
    </>
  )
};