import ApartmentTypes from "../components/home/ApartmentTypes";
import EstimationSection from "../components/home/EstimationSection";
import ExclusiveAgents from "../components/home/ExclusiveAgents";
import GetYourDreamHouse from "../components/home/GetYourDreamHouse";
import HeroSection from "../components/home/HeroSection";
import OurPartners from "../components/home/OurPartners";
import PaginationSection from "../components/home/PaginationSection";
import PropertiesForRent from "../components/home/PropertiesForRent";
import SellingOptionSection from "../components/home/SellingOptionSection";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PaginationSection />
      <PropertiesForRent />
      <SellingOptionSection />
      <EstimationSection />
      <ApartmentTypes />
      <ExclusiveAgents />
      <OurPartners />
      <Testimonials />
      <GetYourDreamHouse />
    </>
  );
};

export default Home;
