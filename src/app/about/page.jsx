import React from 'react';
import About from "../components/About/page";
import WhyUs from "../components/WhyUs/page";
import Banner from "../components/Banner/page";
import Contact from "../components/Contact/page";
import PageHero from "../components/PageHero/page";

function Page() {
    return (
        <>
            <PageHero/>
            <About/>
            <WhyUs/>
            <Banner/>
            <Contact/>
        </>
    );
}

export default Page;