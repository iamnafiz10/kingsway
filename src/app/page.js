import Hero from '../app/components/Hero/page';
import About from './components/About/page';
import Services from './components/Services/page';
import WhyUs from '../app/components/WhyUs/page';

export default function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Services/>
            <WhyUs/>
        </>
    );
}
