import React from 'react';
import whyUsBg from "../../../../public/assets/images/why-us-bg.png";
import whyusData from "../../Data/whyus-data.json";

function Page() {
    const {Section, Title, whyus_list} = whyusData;
    return (
        <>
            <section id="why-us-section" className="relative h-full lg:h-[400px] bg-[#000F21] bg-opacity-100"
                     style={{backgroundImage: `url(${whyUsBg.src})`}}>
                <div className="container py-[6rem] relative z-10">
                    <div className="grid grid-cols-1">
                        <div className="flex items-center gap-2">
                            <div className="w-[40px] h-[2px] bg-primary"></div>
                            <h3 className="text-[18px] text-primary font-semibold">
                                {Section}
                            </h3>
                        </div>
                        <h2 className="text-[40px] text-white font-bold leading-[45px]">
                            {Title}<br/>
                            Your Path to Financial Success
                        </h2>
                    </div>
                </div>
            </section>

            <div className="container py-[6rem] mt-0 lg:-mt-[195px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0">
                    {whyus_list.map((item, index) => (
                        <div key={index} className="col">
                            <div
                                className="box border border-[#E9E9E9] hover:border-white relative bg-white hover:bg-primary text-center h-full xl:h-[350px] p-4 group">
                                <div
                                    className="absolute -top-[20px] border-2 border-white right-[38%] triangle-whyus bg-primary group-hover:bg-white flex items-center justify-start h-[42px] w-[75px]">
                                    <h1 className="text-white group-hover:text-primary text-[30px] font-bold ml-2">
                                        {item.tag}
                                    </h1>
                                </div>
                                <div className="icon mt-8">
                                         <span
                                             className={`text-center group-hover:text-white text-[50px] text-primary icon-theme-color squared fbox-icon-middle ${item.whyus_icon}`}
                                         ></span>
                                </div>
                                <h2 className="text-[25px] mt-4 font-bold text-secondary group-hover:text-white">
                                    {item.title}
                                </h2>
                                <p className="mt-2 text-[18px] text-pgcolor group-hover:text-white">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Page;