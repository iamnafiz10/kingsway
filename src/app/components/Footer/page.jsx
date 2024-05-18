import React from 'react';
import {FaAngleRight} from "react-icons/fa";
import footerData from "../../Data/footer-data.json";
import Link from "next/link";
import Image from "next/image";

function Page() {
    const {logo, description, quick_link, our_service, copyright} = footerData;
    return (
        <>
            <section id="footer-section" className="bg-[#0E162B] mt-[6rem]">
                <div className="container pt-10 pb-6 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col">
                            <div className="logo flex items-start">
                                <Link href='/'>
                                    <Image className="h-full sm:h-[45px] w-[100] sm:w-full" width={100} height={100}
                                           src={logo} alt="Logo"/>
                                </Link>
                            </div>
                            <p className="text-[18px] mt-3">
                                {description}
                            </p>
                        </div>
                        <div className="col">
                            <h2 className='ml-1 text-[18px] font-semibold'>
                                Our Services
                            </h2>
                            <div className="ml-1 w-[40px] h-[2px] mt-1 bg-primary"></div>
                            <ul className="mt-3 space-y-3">
                                {our_service.map((item, index) => (
                                    <li key={index}
                                        className='flex items-center gap-1 text-[16px] hover:text-primary cursor-pointer'>
                                        <FaAngleRight size={15} className="text-primary"/>
                                        <h4>
                                            {item}
                                        </h4>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col">
                            <h2 className='ml-1 text-[18px] font-semibold'>
                                Quick Links
                            </h2>
                            <div className="ml-1 w-[40px] h-[2px] mt-1 bg-primary"></div>
                            <ul className="mt-3 space-y-3">
                                {quick_link.map((item, index) => (
                                    <li key={index}
                                        className='flex items-center gap-1 text-[16px] hover:text-primary cursor-pointer'>
                                        <FaAngleRight size={15} className="text-primary"/>
                                        <h4>
                                            {item}
                                        </h4>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="py-8">
                        <div className="w-full h-[1px] bg-[#0B3967]"></div>
                    </div>
                    <div className="copyright text-center">
                        <h4 className="text-[16px]">
                            {copyright} <span className="text-primary cursor-pointer">Kingsway</span> Investment.
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;