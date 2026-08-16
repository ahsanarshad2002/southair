"use client";

import Footer from "../components/Home/Footer";
import Navbar from "../components/Navbar";
import AboutConnectingDreams from "./components/AboutConnectingDreams";
import AboutInnovation from "./components/AboutInnovation";
import AboutUsHero from "./components/AboutUsHero";
import WhoWeAre from "./components/WhoWeAre";

const AboutClients = () =>{
    return(
        <>
        <Navbar />
        <AboutUsHero />
        <WhoWeAre />
        <AboutConnectingDreams />
        <AboutInnovation />
        <Footer />
        </>
    )
}
export default AboutClients;