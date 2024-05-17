import React from 'react';
import ServicesBg from "../../../../public/assets/images/services-bg.png";
import Image from "next/image";
import serviceData from "../../Data/service-data.json";

function Page() {
    const {Section, Title, service_list} = serviceData;
    return (
        <>
            <section id="services-section" className="mt-16 relative"
                     style={{backgroundImage: `url(${ServicesBg.src})`}}>
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="container pt-16 pb-16 relative z-10">
                    {/* Head wrap */}
                    <div className="head_wrap flex flex-col items-center text-center">
                        <div className="flex items-center gap-2">
                            <div className="w-[45px] h-[2px] bg-primary"></div>
                            <h2 className="text-[18px] font-bold text-primary">
                                {Section}
                            </h2>
                            <div className="w-[45px] h-[2px] bg-primary"></div>
                        </div>
                        <h2 className="text-[40px] font-bold text-secondary">
                            {Title}
                        </h2>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {service_list.map((item, index) => (
                            <div key={index} className="col">
                                <div className="relative group">
                                    <div
                                        className="box bg-white hover:bg-[#DBF5E4] h-full xl:h-[280px] py-4 pl-6 rounded">
                                        <div className="flex items-center justify-between">
                                            <Image src={item.service_Image} width={100} height={100}
                                                   className="w-14 group-hover:stock-white" alt="serviceOne"/>
                                            <div
                                                className="triangle-service bg-primary flex items-center justify-center h-[45px] w-[70px]">
                                                <h1 className="text-white text-[30px] font-bold ml-5">{item.tag}</h1>
                                            </div>
                                        </div>
                                        <h2 className="text-[25px] mt-4 font-bold pr-6 text-secondary">{item.title}</h2>
                                        <p className="mt-2 text-[18px] text-pgcolor pr-6">{item.content}</p>
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 w-full border-b-8 border-transparent group-hover:border-primary transition-all duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;