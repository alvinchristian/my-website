import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
    const form = useRef();

    const inputClass =
        "p-2 md:p-4 xl:p-6 bg-white/20 text-black dark:text-white border-2 border-sky-100 dark:border-indigo-800 focus:border-sky-400 dark:focus:border-indigo-600 focus:outline-none rounded-xl";

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_2cvkd6d",
                "template_1noyrnu",
                form.current,
                "KvPkQXB5kWYS4EHAh"
            )
            .then(() =>
                toast("Message Send Successful", {
                    position: "bottom-right",
                    autoClose: 2000,
                })
            )
            .catch(() => {
                toast("Sessage Send Failed!", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
            });

        e.target.reset();
    };

    return (
        <form
            method="POST"
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full landscape:h-3/4 justify-center landscape:ml-8"
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
                rows={8}
                placeholder="Your Message"
            ></textarea>
            <button className="bg-white hover:bg-black dark:bg-black dark:hover:bg-white hover:text-white dark:text-white dark:hover:text-black mt-2 h-10 self-center md:w-40 w-32 rounded-lg md:text-sm">
                Send Message
            </button>
            <ToastContainer position="bottom-right" autoClose={2000} />
        </form>
    );
};

export default Form;
