'use client';
import React from 'react';
import TestimonialData from '../../Data/testimonial-data.json';
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";
import Image from "next/image";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import Swiper core and required modules
import {Navigation} from 'swiper/modules';
import TestimonialBg from "../../../../public/assets/images/testimonial-bg.jpg";
import {FaStar} from "react-icons/fa";

function Page(props) {
    const {
        title, Section, testimonials
    } = TestimonialData;
    return (
        <>
            <section id="testimonial-section" className="relative text-white"
                     style={{
                         backgroundImage: `url(${TestimonialBg.src})`,
                     }}
            >
                <div className="absolute inset-0"
                     style={{
                         background: "rgba(3,18,41,0.56)",
                     }}
                ></div>
                <div className="relative z-10 full">
                    <div className="container py-[6rem]">
                        {/* Head wrap */}
                        <div className="head_wrap flex flex-col items-center text-center">
                            <div className="flex items-center gap-2">
                                <div className="w-[45px] h-[2px] bg-primary"></div>
                                <h2 className="text-[18px] font-bold text-primary">
                                    {Section}
                                </h2>
                                <div className="w-[45px] h-[2px] bg-primary"></div>
                            </div>
                            <h2 className="text-[40px] font-bold text-white">
                                {title}
                            </h2>
                        </div>

                        <div className="mt-6">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: ".button-next-slide",
                                    prevEl: ".button-prev-slide",
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    400: {
                                        slidesPerView: 1,
                                    },
                                    639: {
                                        slidesPerView: 1,
                                    },
                                    865: {
                                        slidesPerView: 1
                                    },
                                    1000: {
                                        slidesPerView: 1
                                    },
                                    1500: {
                                        slidesPerView: 1
                                    },
                                    1700: {
                                        slidesPerView: 1
                                    }
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="col text-center relative cursor-pointer pt-14 px-4">
                                            <div
                                                className="bg-transparent border-2 border-[#0B284E] rounded-xl pb-12 overflow-visible">
                                                <div
                                                    className="slider-content flex flex-col items-center justify-center">
                                                    <div className="-mt-12 z-50">
                                                        <Image src={testimonial.tImage} width={90} height={100}
                                                               className="rounded-full ring-[6px] ring-primary"
                                                               alt="tImage"/>
                                                    </div>
                                                    <h4 className="font-semibold mt-3 text-[20px]">
                                                        {testimonial.name}<br/>
                                                    </h4>
                                                    <p className="mt-2 font-[500] text-[18px] mx-20">
                                                        {testimonial.description}
                                                    </p>
                                                    <div className="flex items-center gap-1 mt-3">
                                                        <FaStar size={18} className="text-yellow-300"/>
                                                        <FaStar size={18} className="text-yellow-300"/>
                                                        <FaStar size={18} className="text-yellow-300"/>
                                                        <FaStar size={18} className="text-yellow-300"/>
                                                        <FaStar size={18} className="text-yellow-300"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                                {/* Slider Prev-Next Icon*/}
                                <div className="icons flex items-center gap-4">
                                    <div
                                        className="button-prev-slide absolute top-[50%] left-0 z-50 one border-2 border-primary bg-primary cursor-pointer hover:border-white hover:bg-black p-2 rounded-full">
                                        <IoIosArrowRoundBack size={25}/>
                                    </div>

                                    <div
                                        className="button-next-slide two absolute top-[50%] right-0 z-50 border-2 border-primary bg-primary cursor-pointer hover:border-white hover:bg-black p-2 rounded-full">
                                        <IoIosArrowRoundForward size={25}/>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;