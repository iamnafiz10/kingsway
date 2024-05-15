import React from 'react';
import heroData from "../../Data/hero-data.json";

function Page() {
    const {Highlight, Heading, Subheading, button} = heroData;
    return (
        <>
            <section id="home-page-section">
                <div className="container_full pt-[80px] lg:pt-0">
                    <div className="video_wrap w-full h-[400px] md:h-[520px] relative">
                        <video autoPlay muted loop style={{width: '100%', height: '100%', objectFit: 'cover'}}>
                            <source src="/assets/images/hero.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-[0.7]">
                            <div className="bg-primary px-8 py-3 rounded-[3px] rounded-tl-[20px] rounded-br-[20px]">
                                <h2 className="text-white text-[15px] md:text-[22px] font-bold">
                                    {Highlight}
                                </h2>
                            </div>
                            <h1 className="text-[35px] md:text-[65px] mt-1 font-bold text-white">
                                {Heading}
                            </h1>
                            <p className="text-white font-[16px] text-center mx-4 md:mx-0">
                                {Subheading}<br/>
                                and Advisory Services.
                            </p>
                            <button type='button'
                                    className="mt-4 py-3 px-10 bg-secondary text-white text-[16px] font-semibold rounded">
                                {button}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;