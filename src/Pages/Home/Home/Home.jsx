import { Contact } from "lucide-react";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import FAQ from "../FAQ/FAQ";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurExperts from "../OurExperts/OurExperts";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <CallToAction></CallToAction>
            <OurExperts></OurExperts>
            <FAQ></FAQ>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;