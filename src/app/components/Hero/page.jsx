import React from 'react';
import heroData from "../../Data/hero-data.json";
import Link from "next/link";

function Page() {
    const {Highlight, Heading, Subheading, button} = heroData;
    return (
        <>
            <section id="home-page-section">
                <div className="container_full pt-[80px] lg:pt-0">
                    <div className="video_wrap w-full h-[400px] md:h-[80vh] relative">
                        <video autoPlay muted loop style={{width: '100%', height: '100%', objectFit: 'cover'}}>
                            <source src="/assets/images/hero.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 15, 32, 0.9)',
                            }}
                            className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="flex items-center">
                                <div className="relative">
                                    <div className="trapezoid w-[320px] md:w-[470px]">
                                    </div>
                                    <h4 className="absolute top-1/2 -left-[5%] transform -translate-y-1/2 w-full text-[15px] md:text-[22px] font-bold text-white text-center">
                                        {Highlight}
                                    </h4>
                                </div>
                            </div>
                            <h1 className="text-[35px] md:text-[65px] mt-1 font-bold text-white">
                                {Heading}
                            </h1>
                            <p className="text-white text-[20px] leading-9 text-center mx-4 md:mx-0">
                                {Subheading}<br/>
                                and Advisory Services.
                            </p>
                            <Link href='/about' type='button'
                                  className="mt-4 py-3 px-10 bg-primary text-white text-[16px] font-semibold rounded">
                                {button}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;