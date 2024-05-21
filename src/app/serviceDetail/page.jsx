"use client";
import React from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import serviceData from "../Data/service-data.json";
import PageHeroBg from "../../../public/assets/images/page-hero.jpg";
import Image from "next/image";

function ServiceDetail() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const serviceItem = serviceData.service_list.find(item => item.id === id);

    if (!serviceItem) {
        return <p>Service not found</p>;
    }

    const {title, content, service_Image, sections} = serviceItem;

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
                            {title}
                        </h1>
                    </div>
                </div>
            </section>

            <section id="services-section" className="relative bg-white">
                <div className="container py-[6rem] relative z-10">
                    <div className="grid grid-cols-1">
                        <div className="col">
                            <div className="relative group">
                                <div className="box bg-white h-full py-6 px-4 rounded">
                                    {sections && sections.map((section, index) => (
                                        <div key={index} className="content_wrap pb-4">
                                            <h2 className="text-[25px] font-bold text-secondary">
                                                {section.title}
                                            </h2>
                                            <p className="mt-2 text-[18px] text-pgcolor pr-6 pb-4">
                                                {section.description}
                                            </p>
                                            <hr/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceDetail;