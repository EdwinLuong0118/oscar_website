import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>O.T.E. Exotic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <h1 style={{"text-align":"center"}}>
        <u>
        <p style={{"font-size": "55px", "font-family":"Helvetica", "color": "#00a3cc"}}>O.T.E. EXOTIC CO.</p>
        </u>
        </h1>
        <h5 style={{"text-align":"center"}}>
        <p style={{"font-size": "20px", "color":"#000000", "font-family": "Helvetica"}}>
            Wholesale Birds, Cages and Accessories </p>
        </h5>
        <hr/>

        <h4 style={{"text-align":"center", "font-family":"Helvetica"}}>
        <ul><li><a href="/">Home</a></li>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/contact">Contact Information</a></li>
        </ul>
        </h4>
        <p><h4 style={{"font-size":"30px", "color":"#00a3cc", "font-family":"Helvetica"}}>Hello I'm Oscar.</h4>
            <h4 style={{"font-size":"20px", "color":"#FFFFFF", "font-family":"Helvetica"}}>I am the owner of O.T.E. Exotic Co. where I wholesale cages and<br/> accessories.<br/></h4> 
            <h4 style={{"font-size":"30px", "color":"#00a3cc", "font-family":"Helvetica"}}><u>You can reach me at:</u></h4>
            <h4 style={{"font-size":"20px", "color":"#FFFFFF", "font-family":"Helvetica"}}>(626) 321-0910<br/>or<br/>oscartran2002@yahoo.com</h4>
            <br/><h4 style={{"font-family":"Helvetica","font-size":"14px","color":"#FFFFFF","text-align":"center"}}> Please contact me if you have any further questions!</h4>
            </p>
      </Head>
      <body style={{"background":"url(https://i.redd.it/au40rxdxbo571.png)", "z-index":"-1"}}>
      </body>
  </div>
  )
  }
