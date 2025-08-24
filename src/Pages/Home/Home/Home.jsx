import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import FAQSection from "../FAQSection/FAQSection";
import HowItWorks from "../HowItWorks/HowItWorks";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <CallToAction></CallToAction>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;