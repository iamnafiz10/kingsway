'use client';

import React, {useState} from 'react';

function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isLoading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const formDataToString = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };

    const scriptURL = process.env.NEXT_PUBLIC_CONTACT_FORM_GOOGLE_SHEET_LINK;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const formDataStr = formDataToString(formData);

        fetch(scriptURL, { method: 'POST', body: formDataStr})
            .then((response) => {
                setLoading(false)
                alert("Thank you! Your form is submitted successfully." );
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
    }

    return (
        <>
            <section id="contact-section" className='bg-[#0B1A31]'>
                <div className="container py-[6rem]">
                    <h1 className="text-white text-center text-[40px] font-bold">Contact Us</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 block lg:flex w-full items-center justify-center gap-4">
                            <div className="input_box w-full">
                                <input
                                    type="text"
                                    className="w-full bg-[#0B3967] py-3 px-6 rounded focus:outline-0 border-none shadow-none text-white"
                                    id="username"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-4 lg:mt-0 input_box w-full">
                                <input
                                    placeholder="Email"
                                    className="w-full bg-[#0B3967] py-3 px-6 rounded focus:outline-0 border-none shadow-none text-white"
                                    id="username"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="input_box w-full mt-4">
                          <textarea
                              rows={5}
                              placeholder="Message"
                              className="w-full bg-[#0B3967] py-3 px-6 rounded focus:outline-0 border-none shadow-none text-white"
                              value={formData.message}
                              onChange={handleChange}
                              name="message"
                              id="message"
                          ></textarea>
                        </div>
                        <button type='submit'
                                className="mt-3 py-3 px-10 bg-primary text-white text-[16px] font-semibold rounded">
                            {
                                isLoading ? <div className="loader"></div> : 'Send Message'
                            }
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Page;