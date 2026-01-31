import HeroBanner from "./components/HeroBanner";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import OurProjects from "./components/OurProjects";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import RequestAQuote from "./components/RequestAQuote";
import AboutCompany from "./components/AboutCompany";

export default function Home() {
    return (
        <main className="homepage">
            <HeroBanner />
            <AboutCompany />
            <AboutUs />
            <OurServices />
            <WhyChooseUs />
            <OurProjects />
            <Testimonials />
            <RequestAQuote />
        </main>
    );
}
