import HeroBanner from "./components/HeroBanner";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import OurProjects from "./components/OurProjects";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import RequestAQuote from "./components/RequestAQuote";

export default function Home() {
    return (
        <main>
            <HeroBanner />
            <AboutUs />
            <OurServices />
            <WhyChooseUs />
            <OurProjects />
            <Testimonials />
            <RequestAQuote />
        </main>
    );
}
