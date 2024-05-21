import React from 'react';
import PageHeroBg from "../../../public/assets/images/page-hero.jpg";

function Page() {
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
                            Service name
                        </h1>
                    </div>
                </div>
            </section>

            {/* Body content */}
            <section id="services-section" className="relative bg-white">
                <div className="container py-[6rem] relative z-10">
                    <div className="grid grid-cols-1">
                        <div className="col">
                            <div className="relative group">
                                <div className="box bg-white h-full py-6 px-4 rounded">
                                    <div className="content_wrap pb-4">
                                        <h2 className="text-[25px] font-bold text-secondary">
                                            Financial Strategy
                                        </h2>
                                        <p className="mt-2 text-[18px] text-pgcolor pr-6">
                                            At our firm, we understand that each individual’s financial journey is
                                            unique. That’s why we develop tailored strategies that align with your
                                            personal goals and adapt to life’s changes, ensuring a secure financial
                                            future. Our comprehensive approach involves understanding your current
                                            financial situation, identifying your short-term and long-term objectives,
                                            and creating a flexible plan that can evolve with your needs.
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className="content_wrap pb-4 mt-4">
                                        <h2 className="text-[25px] font-bold text-secondary">
                                            Title
                                        </h2>
                                        <p className="mt-2 text-[18px] text-pgcolor pr-6">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
                                            animi aspernatur dolores earum est et facere, laboriosam laudantium magnam,
                                            maiores modi natus necessitatibus praesentium qui quisquam, suscipit tempore
                                            voluptatibus!
                                        </p>
                                    </div>

                                    <hr/>
                                    <div className="content_wrap pb-4 mt-4">
                                        <h2 className="text-[25px] font-bold text-secondary">
                                            Title
                                        </h2>
                                        <p className="mt-2 text-[18px] text-pgcolor pr-6">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
                                            animi aspernatur dolores earum est et facere, laboriosam laudantium magnam,
                                            maiores modi natus necessitatibus praesentium qui quisquam, suscipit tempore
                                            voluptatibus!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;