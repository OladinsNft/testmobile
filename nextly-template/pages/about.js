import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";


import Faq from "../components/faq";


const Home = () => {
  return (
    <>
    <div className="Daydream"> 
      <Head>
        <title >Linea Rocks</title>
        <meta
          name="description"
          content="Linea Rocks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Linea Rocks Benefits"
        title=" Why should you be the member of Linea Rocks?">
        We will work together with Linea Rocks to get whitelist to the best NFT projects on the Linea platform, work for Linea airdrop, and contribute to the development of the Linea network.
      </SectionTitle>
      <Benefits data={benefitOne} />
      
      
      
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      
      </div>
      
    </>
    
  );
}

export default Home;