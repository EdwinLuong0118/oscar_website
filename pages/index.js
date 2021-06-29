import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>O.T.E. Exotic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 style={{"text-align":"center"}}>
        <u>
        <p style={{"font-size": "55px", "font-family":"Helvetica", "color": "#00a3cc"}}>O.T.E. EXOTIC CO.</p>
        </u>
      </h1>

      <h5 style={{"text-align":"center"}}>
        <p style={{"font-size": "30px", "color":"#000000", "font-family": "Helvetica"}}>
          <u> Wholesale Birds, Cages and Accessories</u>
        </p>
      </h5>

      <hr/>

      <h4 style={{"text-align":"center", "font-family":"Helvetica"}}>
      <ul><li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/catalog"><a>Catalog</a></Link></li>
      <li><Link href="/contact"><a>Contact Information</a></Link></li>
      </ul>
      </h4>

      <hr/>
      <h3 style={{"font-family":"helvetica","text-align":"left","font-size":"30px","color":"#00a3cc"}}>
        <u>
        Best Sellers!
        </u>
      </h3>
      <ul2 style={{"list-style-type":"none"}}>

      <h3 style={{"text-align":"center"}}>
      <li>
        {/* <Link href="https://i.redd.it/zw37vsrsio571.png">  <a><Image src="/favicon.ico" alt="Item  #3373"style={{"width":"250px","height":"350px"}}/></a></Link> */}
        <Image width={100} height={100} src="best_seller1.png"></Image>
        {/* <Link href="https://i.redd.it/zw37vsrsio571.png">  <a><Image src="/favicon.ico" alt="Item  #3373"style={{"width":"250px","height":"350px"}}/></a></Link> */}
        {/* <a href="https://i.redd.it/zw37vsrsio571.png"><img src="https://i.redd.it/zw37vsrsio571.png" alt="Item  #3373"style={{"width":"250px","height":"350px"}}/></a> */}
      <h5 style={{"color": "#000000","font-family": "helvetica","font-size": "20px"}}><p>#3373</p></h5></li>

      {/* <li><a href="https://i.redd.it/af7mwf2ddo571.png"><img src="https://i.redd.it/af7mwf2ddo571.png" alt="Item #2424" style={{"width":"300px", "height":"300px"}}/></a>
      <h5 style={{"color": "#000000","font-family": "helvetica","font-size": "20px"}}><p>#2424</p></h5></li>

      <li><a href="https://i.redd.it/az3u9zdwho571.png"><img src="https://i.redd.it/az3u9zdwho571.png" alt="Item #8242" style={{"width":"300px", "height":"200px"}}/></a>
      <h5 style={{"color": "#000000","font-family": "helvetica","font-size": "20px"}}><p>#8242</p></h5></li>

      <li><a href="https://i.redd.it/0ais0spxgo571.png"><img src="https://i.redd.it/0ais0spxgo571.png" alt="Item  #0482"style={{"width":"250px", "height":"350px"}}/></a>
      <h5 style={{"color": "#000000","font-family": "helvetica","font-size": "20px"}}><p>#0482</p></h5></li> */}

      </h3>
      </ul2>

      <body style={{"background": "url(https://i.redd.it/t3b616ul9a671.png)"}}>

      </body>    
  </div>
  )
  }
