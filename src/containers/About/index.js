import React, { useState } from "react";
import { FaCode, FaRegIdBadge, FaUniversity, FaWpforms } from "react-icons/fa";
import { Education, Experiences, Profile, Skills } from "../../components";

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const iconClass = "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7";
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
            className="w-full h-screen flex justify-center items-center"
        >
            <div className="flex flex-col landscape:flex-row w-11/12 h-full justify-center items-center pt-10">
                <div className="w-11/12 h-96 landscape:h-3/4 px-6 md:px-8 lg:px-12 py-4 flex justify-center items-center rounded-xl bg-white/20 text-slate-800 dark:text-slate-50 text-xs md:text-sm lg:text-base xl:text-lg text-normal leading-normal md:leading-relaxed text-center">
                    {currentIndex === 0 && <Profile />}
                    {currentIndex === 1 && <Education />}
                    {currentIndex === 2 && <Experiences />}
                    {currentIndex === 3 && <Skills />}
                </div>
                <div className="flex flex-row landscape:flex-col justify-evenly items-center w-11/12 landscape:w-1/12 h-14 landscape:h-3/4 mt-4 landscape:mt-0 landscape:ml-2 bg-white/20 border-2 border-sky-300 dark:border-indigo-900 rounded-xl">
                    {button.map(({ id, icon }) => (
                        <div
                            onClick={() => setCurrentIndex(id)}
                            key={id}
                            className={`text-slate-800 dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black ${
                                currentIndex === id
                                    ? "bg-black text-white dark:bg-white dark:text-black animate-bounce"
                                    : null
                            } mx-1 p-2 rounded-lg cursor-pointer`}
                        >
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
