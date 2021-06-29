import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      {/* <Head>
        <title>O.T.E. Exotic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      
      <h1>My Homepage</h1>
      <Image style={{"height":"100px", "width":"100px"}} src="best_seller1.png" alt="Picture of the author" />
      <Image style={{"height":"100px", "width":"100px"}} src="favicon.ico" alt="Picture of the author" />

      <p>Welcome to my homepage!</p>

{/* 
      <body style={{"background": "url(https://i.redd.it/t3b616ul9a671.png)"}}>

      </body>     */}
  </>
  )
  }
