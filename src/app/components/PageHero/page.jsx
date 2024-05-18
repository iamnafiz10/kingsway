"use client";
import React from 'react';
import PageHeroBg from "../../../../public/assets/images/page-hero.jpg";
import {usePathname} from "next/navigation";

function Page() {
    const pathname = usePathname();

    // Define the heading text based on the current pathname
    let headingText;
    switch (pathname) {
        case '/about':
            headingText = 'About Us';
            break;
        case '/services':
            headingText = 'Services';
            break;
        case '/contact':
            headingText = 'Contact Us';
            break;
        case '/':
            headingText = 'Home';
            break;
        default:
            headingText = 'Page';
    }
    return (
        <>
            <section id="page-hero-section" className="relative text-white"
                     style={{
                         backgroundImage: `url(${PageHeroBg.src})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat'
                     }}
            >
                <div className="absolute w-full h-full bg-[#000F21] opacity-80"></div>
                <div className="relative z-10 flex items-center justify-center">
                    <div className="container pt-[125px] sm:pt-[135px] md:pt-[135px] lg:pt-[90px] h-[250px]">
                        <h1 className="text-[40px] font-bold">
                            {headingText}
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;