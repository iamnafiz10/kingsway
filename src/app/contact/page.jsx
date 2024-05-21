import React from 'react';
import About from "../components/About/page";
import Services from "../components/Services/page";
import WhyUs from "../components/WhyUs/page";
import Testimonial from "../components/Testimonial/page";
import Banner from "../components/Banner/page";
import Contact from "../components/Contact/page";
import PageHero from "../components/PageHero/page";

function Page() {
    return (
        <>
            <PageHero/>
            <Contact/>
        </>
    );
}

export default Page;