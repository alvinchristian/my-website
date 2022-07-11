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
        <div className="flex md:flex-col md:w-64 md:mr-10 w-full max-w-sm h-full mb-2">
            {contact.map(({ id, icon, title, value, href }) => (
                <li
                    key={id}
                    className="flex flex-col w-full py-4 mx-1 md:mb-4 mb-2 justify-center items-center list-none bg-white/20 rounded-xl"
                >
                    {icon}
                    <h1 className="md:text-base font-semibold my-1">{title}</h1>
                    <h2 className="hidden md:flex">{value}</h2>
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold cursor-pointer mt-2 text-sky-500 hover:text-sky-800"
                    >
                        - Message -
                    </a>
                </li>
            ))}
        </div>
    );
};

export default Card;
