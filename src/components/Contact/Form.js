import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
    const form = useRef();

    const inputClass =
        "p-4 bg-white/20 border-2 border-cyan-50 focus:border-sky-800 focus:outline-none rounded-xl";

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_2cvkd6d",
                "template_1noyrnu",
                form.current,
                "KvPkQXB5kWYS4EHAh"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col md:w-96 w-full max-w-sm"
        >
            <input
                className={`${inputClass}`}
                type="text"
                name="name"
                placeholder="Your Name"
                required
            />
            <input
                className={`my-2 ${inputClass}`}
                type="email"
                name="email"
                placeholder="Your Email"
                required
            />
            <textarea
                className={`${inputClass} resize-none`}
                name="message"
                rows={6}
                placeholder="Your Message"
            ></textarea>
            <button className="bg-gradient-to-t from-blue-50 to-blue-100 hover:bg-gradient-to-t hover:from-sky-50 hover:to-sky-100 mt-2 h-10 md:self-start self-center md:w-40 w-32 rounded-lg md:text-sm">
                Send Message
            </button>
        </form>
    );
};

export default Form;
