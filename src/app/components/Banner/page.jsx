import React from 'react';
import BannerBg from "../../../../public/assets/images/banner-bg.png";
import bannerData from "../../Data/banner-data.json";

function Page() {
    const {body, cta} = bannerData;
    return (
        <>
            <section id="banner-section" className="mt-10 relative text-white"
                     style={{
                         backgroundImage: `url(${BannerBg.src})`,
                         backgroundColor: "#000F21",
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat'
                     }}
            >
                <div className="absolute w-full h-full opacity-50"></div>
                <div className="relative z-10 py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-between">
                            <div className="col lg:col-span-9">
                                <h2 className="text-[25px] font-semibold">
                                    {body}
                                </h2>
                            </div>
                            <div className="col lg:col-span-3 block lg:flex justify-end">
                                <button type='button'
                                        className="mt-4 py-3 px-10 bg-primary text-white text-[16px] font-semibold rounded">
                                    {cta}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;