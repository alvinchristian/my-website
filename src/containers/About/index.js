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
            className="w-full h-screen bg-gradient-to-b from-d4 to-d3 dark:from-n4 dark:to-n3 flex flex-col justify-center items-center"
        >
            <h1 className="md:text-3xl text-xl font-semibold text-black dark:text-white md:mb-8 mb-4">
                About
            </h1>
            <div className="w-10/12 h-96 py-10 md:mb-6 mb-4 md:px-10 px-5 flex justify-center items-center rounded-xl bg-white/20 text-slate-800 dark:text-slate-50 md:text-base text-xs text-normal leading-relaxed text-center">
                {currentIndex === 0 && <Profile />}
                {currentIndex === 1 && <Education />}
                {currentIndex === 2 && <Experiences />}
                {currentIndex === 3 && <Skills />}
            </div>
            <div className="flex py-2 px-3 md:w-2/6 w-4/6 justify-evenly bg-white/20 border-4 border-cyan-200 dark:border-indigo-700 rounded-xl">
                {button.map(({ id, icon }) => (
                    <div
                        onClick={() => setCurrentIndex(id)}
                        key={id}
                        className={`text-slate-800 dark:white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black ${
                            currentIndex === id
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : null
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
