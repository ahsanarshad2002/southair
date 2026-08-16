"use client";

import Footer from "../components/Home/Footer";
import Navbar from "../components/Navbar";
import SeatPreallocation from "./components/SeatPreallocation";
import SouthAirExperience from "./components/SouthAirExperience";
import WhySouthAirHero from "./components/WhySouthAirHero";
import WhySouthAirIntro from "./components/WhySouthAirIntro";


const WhySouthAirClient = () => {
    return (
        <>
            <Navbar />
            <WhySouthAirHero />
            <WhySouthAirIntro />
            <SouthAirExperience />
            <SeatPreallocation />
            <Footer />
            
        </>
    )
}
export default WhySouthAirClient;      