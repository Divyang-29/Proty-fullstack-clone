
import DiscoverHelp from "./DiscoverHelp";
import ExploreNeighborhoods from "./ExploreNeighborhoods";
import HeroSection from "./HeroSection";
import HomeLoan from "./HomeLoan";
import InsightOpinion from "./InsightOpinion";
import LetsWorkTogether from "./LetsWorkTogether";
import LuxuryListings from "./LuxuryListings";
import OpenHouses from "./OpenHouses";
import PropertyType from "./PropertyType";
import Testimonials from "./Testimonials";

export default function Home(){
    return(
        <>
        <HeroSection/>
        <PropertyType/>
        <LuxuryListings/>
        <DiscoverHelp/>
        <HomeLoan/>
        <ExploreNeighborhoods/>
        <OpenHouses/>
        <LetsWorkTogether/>
        <InsightOpinion/>
        <Testimonials/>
        </>
    )
}