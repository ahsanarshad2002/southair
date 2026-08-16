"use client";

import Footer from "../components/Home/Footer";
import Navbar from "../components/Navbar";
import FeaturedDestinations from "./components/Featureddestinations";
import NetworkSection from "./components/NetworkSection";
import RouteMapHero from "./components/RouteMapHero";

const RouteMapClient = () => {
    return (
        <>
            <Navbar />
            <RouteMapHero />
            <NetworkSection />
            <FeaturedDestinations />
            <Footer />
            
        </>
    )
}
export default RouteMapClient;