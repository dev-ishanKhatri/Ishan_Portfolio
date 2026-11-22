import React, { useState } from 'react'
import API from "../../api";

const ContactMe = () => {

    const [Data, setdata] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChanges = (e) => {
        setdata({
            ...Data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await API.post("/api/contact", Data);

            alert("Message Sent Successfully");

            setdata({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            alert("Failed to send message");
        }
    }

    return (
        <section className="h-screen p-5 bg-[#03112B] flex justify-center items-center md:min-h-screen  md:flex md:justify-center md:items-center
      lg:min-h-screen lg:flex lg:justify-center lg:items-center" id='ContantMe'>
            <div className="w-full max-w-4xl bg-zinc-800 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 lg:max-w-300">

                {/* Left Side */}
                <div className="bg-linear-to-br from-blue-600 to-indigo-700 text-white p-3 flex flex-col justify-center md:p-5 lg:p-7">
                    <h1 className="text-4xl font-bold mb-2 md:mb-5 lg:mb-8">
                        Contact Me
                    </h1>

                    <p className="text-zinc-200 leading-4 mb-2 md:mb-5 md:leading-7 lg:mb-7 lg:leading-7">
                        Have a project in mind or want to work together?
                        Feel free to send me a message. I'll get back to you as soon as possible.
                    </p>

                    <div className="space-y-2 text-sm md:space-y-5 lg:space-y-7">

                        <div>
                            <p className="font-semibold">📧 Email</p>
                            <p>ishankhatri30@gmail.com</p>
                        </div>

                        <div>
                            <p className="font-semibold">📍 Location</p>
                            <p>Petlad, Anand, Gujarat</p>
                        </div>

                        <div>
                            <p className="font-semibold">💻 GitHub</p>
                            <p>Ishan</p>
                        </div>

                    </div>
                </div>

                {/* Right Side */}
                <div className="p-4 md:p-10">

                    <h2 className="text-2xl font-bold text-white mb-3">
                        Send Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-2">

                        <div>
                            <label className="text-zinc-300 block mb-2 lg:mb-3">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={Data.name}
                                onChange={handleChanges}
                                required
                                className="w-full bg-zinc-700 text-white px-3 py-1 rounded-xl outline-none border  focus:border-blue-500 transition lg:px-4 lg:py-3"
                            />
                        </div>

                        <div>
                            <label className="text-zinc-300 block mb-1 lg:mb-3">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={Data.email}
                                onChange={handleChanges}
                                required
                                className="w-full bg-zinc-700 text-white px-3 py-1 rounded-xl outline-none border  focus:border-blue-500 transition lg:px-4 lg:py-3"
                            />
                        </div>

                        <div>
                            <label className="text-zinc-300 block mb-1 lg:mb-3">
                                Subject
                            </label>

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={Data.subject}
                                onChange={handleChanges}
                                required
                                className="w-full bg-zinc-700 text-white px-3 py-1 rounded-xl outline-none border focus:border-blue-500 transition lg:px-4 lg:py-3"
                            />
                        </div>

                        <div>
                            <label className="text-zinc-300 block mb-1 lg:mb-3">
                                Message
                            </label>

                            <textarea
                                rows="2"
                                name="message"
                                placeholder="Write your message..."
                                value={Data.message}
                                onChange={handleChanges}
                                required
                                className="w-full bg-zinc-700 text-white px-3 py-1 rounded-xl outline-none border focus:border-blue-500 transition resize-none lg:px-4 lg:py-5"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-2 rounded-xl font-semibold cursor-pointer lg:py-4"
                        >
                            Send Message
                        </button>

                    </form>

                </div>
            </div>
        </section>
    )
}

export default ContactMe