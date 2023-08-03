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

     
      
      </div>
      
    </>
    
  );
}

export default Home;
