"use client";

import DiscoverPakistan from "../components/Home/DiscoverPakistan";
import Footer from "../components/Home/Footer";
import HeroSection from "../components/Home/HeroSection";
import BoardingPassSlider from "../components/Home/OfferSection";   
import OnboardExperience from "../components/Home/Onboardexperience";
import Testimonials from "../components/Home/Testimonials";
import WhySouthAir from "../components/Home/WhySouthAir";
import Navbar from "../components/Navbar";

const HomeClient = () =>{
    return(
        <>
        <Navbar />
        <HeroSection />
        <WhySouthAir />
        <DiscoverPakistan />
        <OnboardExperience />
        <BoardingPassSlider />
        <Testimonials />
        <Footer />
        </>
    )
}
export default HomeClient;

