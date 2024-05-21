import React from 'react';

function Page() {
    return (
        <>
            <section id="contact-section" className='bg-[#0B1A31]'>
                <div className="container py-[6rem]">
                    <h1 className="text-white text-center text-[40px] font-bold">Contact Us</h1>

                    <div className="mt-4 block lg:flex w-full items-center justify-center gap-4">
                        <div className="input_box w-full">
                            <input type="text" placeholder="Name"
                                   className="w-full bg-[#0B3967] py-3 px-6 rounded focus:outline-0 border-none shadow-none text-white"/>
                        </div>
                        <div className="mt-4 lg:mt-0 input_box w-full">
                            <input type="text" placeholder="Email"
                                   className="w-full bg-[#0B3967] py-3 px-6 rounded focus:outline-0 border-none shadow-none text-white"/>
                        </div>
                    </div>

                    <div className="input_box w-full mt-4">
                        <textarea rows={5} placeholder="Message"
                                  className="w-full bg-[#0B3967] py-3 px-6 rounded focus:outline-0 border-none shadow-none text-white"></textarea>
                    </div>
                    <button type='button'
                            className="mt-3 py-3 px-10 bg-primary text-white text-[16px] font-semibold rounded">
                        Send Message
                    </button>
                </div>
            </section>
        </>
    );
}

export default Page;