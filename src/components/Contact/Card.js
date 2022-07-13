import React from "react";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

const Card = () => {
    const contact = [
        {
            id: 1,
            icon: <FaRegEnvelope size={20} />,
            title: "Email",
            value: "alvintherry20@gmail.com",
            href: "mailto:alvintherry20@gmail.com",
        },
        {
            id: 2,
            icon: <FaWhatsapp size={20} />,
            title: "WhatsApp",
            value: "0822 9049 1884",
            href: "https://wa.me/082290491884",
        },
    ];

    return (
        <div className="flex landscape:flex-col w-full landscape:w-4/12 landscape:h-3/4 justify-center items-center">
            {contact.map(({ id, icon, title, value, href }) => (
                <div
                    key={id}
                    className="flex flex-col w-full landscape:h-full lg:landscape:h-2/6 py-4 mx-2 landscape:mx-0 landscape:md:mb-4 mb-2 justify-center items-center bg-white/20 text-slate-800 dark:text-slate-50 rounded-xl"
                >
                    {icon}
                    <h1 className="lg:text-base font-bold my-1">{title}</h1>
                    <h2 className="hidden md:flex">{value}</h2>
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold cursor-pointer md:mt-2 text-cyan-500 hover:text-cyan-700 dark:text-indigo-500 dark:hover:text-indigo-300"
                    >
                        - Message -
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Card;
