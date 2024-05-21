import React from 'react';
import Services from "../components/Services/page";
import Banner from "../components/Banner/page";
import Contact from "../components/Contact/page";
import PageHero from "../components/PageHero/page";

function Page() {
    return (
        <>
            <PageHero/>
            <Services/>
            <Banner/>
            <Contact/>
        </>
    );
}

export default Page;