import React, { useState } from "react";
import { FaCode, FaRegIdBadge, FaUniversity, FaWpforms } from "react-icons/fa";
import { Education, Experiences, Profile, Skills } from "../../components";

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const iconClass = "md:w-6 md:h-6 w-4 h-4";
    const button = [
        {
            id: 0,
            icon: <FaRegIdBadge className={iconClass} />,
        },
        {
            id: 1,
            icon: <FaUniversity className={iconClass} />,
        },
        {
            id: 2,
            icon: <FaWpforms className={iconClass} />,
        },
        {
            id: 3,
            icon: <FaCode className={iconClass} />,
        },
    ];

    return (
        <div
            name="About"
            className="w-full h-screen bg-gradient-to-b from-d4 to-d3 flex flex-col justify-center items-center"
        >
            <h1 className="md:text-3xl text-xl font-semibold text-slate-800 md:mb-8 mb-4">
                About
            </h1>
            <div className="w-10/12 h-96 py-10 md:mb-6 mb-4 md:px-10 px-5 flex justify-center items-center rounded-xl bg-white/20 text-slate-800 md:text-base text-xs text-normal leading-relaxed text-center">
                {currentIndex === 0 && <Profile />}
                {currentIndex === 1 && <Education />}
                {currentIndex === 2 && <Experiences />}
                {currentIndex === 3 && <Skills />}
            </div>
            <div className="flex py-1 px-3 md:w-2/6 w-5/6 justify-evenly bg-white/30 border-2 border-cyan-50 rounded-xl">
                {button.map(({ id, icon }) => (
                    <div
                        onClick={() => setCurrentIndex(id)}
                        key={id}
                        className={`text-slate-800 hover:bg-black hover:text-white ${
                            currentIndex === id ? "bg-black text-white" : null
                        } mx-1 p-2 rounded-xl cursor-pointer`}
                    >
                        {icon}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
