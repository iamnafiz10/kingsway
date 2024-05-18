import Hero from '../app/components/Hero/page';
import About from './components/About/page';
import Services from './components/Services/page';
import WhyUs from '../app/components/WhyUs/page';
import Testimonial from './components/Testimonial/page';
import Banner from './components/Banner/page';
import Contact from './components/Contact/page';

export default function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Services/>
            <WhyUs/>
            <Testimonial/>
            <Banner/>
            <Contact/>
        </>
    );
}
