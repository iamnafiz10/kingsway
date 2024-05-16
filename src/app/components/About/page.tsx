import React from 'react';
import Image from "next/image";
import AboutImg from '../../../../public/assets/images/about.jpg';
import Aboutbg from '../../../../public/assets/images/about-bg.png';
import {BsCheck2Square} from "react-icons/bs";
import aboutData from '../../Data/about-data.json';

function Page() {
    const {
        Section,
        Title,
        Intro,
        about_list
    } = aboutData;
    return (
        <>
            <section id="about-section"
                     style={{
                         backgroundImage: `url(${Aboutbg.src})`,
                     }}
            >
                <div className="container pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-20">
                        <div className="col lg:col-span-5">
                            <Image src={AboutImg} alt="AboutImg"/>
                        </div>
                        <div className="col lg:col-span-7">
                            <div className="flex items-center gap-2">
                                <div className="w-[40px] h-[1px] bg-primary"></div>
                                <h3 className="text-[18px] font-semibold">
                                    {Section}
                                </h3>
                            </div>
                            <h1 className="text-[40px] font-bold leading-[45px] mt-4">
                                {Title}
                            </h1>
                            <p className="mt-6 text-gray-400 text-[18px]">
                                {Intro}
                            </p>

                            <div className="mt-8 space-y-6">
                                {about_list.map((item, index) => (
                                    <div key={index} className="content_box flex items-start gap-4 group">
                                        <div className="icon p-5 bg-primary group-hover:bg-black rounded-full">
                                            <BsCheck2Square size={30} className="text-white"/>
                                        </div>
                                        <div className="content">
                                            <h2 className="text-[20px] font-semibold">
                                                {item.title}
                                            </h2>
                                            <p className="text-gray-400 text-[18px]">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;