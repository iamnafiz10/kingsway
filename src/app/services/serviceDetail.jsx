import React from 'react';
import PageHeroBg from "../../../public/assets/images/page-hero.jpg";

function ServiceDetail() {
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
                    <div className="container pt-[135px] lg:pt-[90px] h-[250px]">
                        <h1 className="text-[40px] font-bold">
                            Service Details Name
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceDetail;