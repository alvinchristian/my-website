import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import { images } from "../../assets";

const Home = () => {
    const iconSize = "w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8";
    const socialMedia = [
        {
            id: 1,
            icon: <FaInstagram className={`${iconSize} hover:text-rose-400`} />,
            href: "https://www.instagram.com/alvinchristian23/",
        },
        {
            id: 2,
            icon: <FaLinkedin className={`${iconSize} hover:text-blue-700`} />,
            href: "https://www.linkedin.com/in/alvinchristian/",
        },
        {
            id: 3,
            icon: <FaGithub className={`${iconSize} hover:text-black`} />,
            href: "https://github.com/alvinchristian",
        },
        {
            id: 4,
            icon: <FaGitlab className={`${iconSize} hover:text-orange-500`} />,
            href: "https://gitlab.com/alvinchristian",
        },
    ];

    return (
        <div
            name="Home"
            className="flex landscape:flex-row flex-col landscape:justify-evenly justify-center items-center w-full h-screen
         pt-10"
        >
            <div className="w-10/12 landscape:w-6/12 mb-8 landscape:mb-0 px-6 md:px-12 lg:px-20 dark:text-slate-50 text-slate-800 text-center">
                <h3 className="text-xs md:text-sm lg:text-base font-medium text-start">
                    Hello, I'm,
                </h3>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-2 text-black dark:text-white">
                    Alvin Christian
                </h1>
                <h2 className="text-sm md:text-base lg:text-lg font-semibold border-b-2 border-double border-black dark:border-white">
                    Front End Developer
                </h2>
                <h2 className="text-sm md:text-base lg:text-lg font-semibold">
                    Mobile Developer
                </h2>
                <div className="flex justify-evenly mt-4 lg:mt-6 mb-4 md:mb-8 lg:mb-10 text-slate-500">
                    {socialMedia.map(({ id, icon, href }) => (
                        <a
                            key={id}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
                <a
                    href="/Alvin Christian - CV.pdf"
                    download={true}
                    className="bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-4 py-2 md:px-5 md:py-3 rounded-lg text-xs md:text-sm font-semibold"
                >
                    Download CV
                </a>
            </div>
            <img
                src={images.MyPhoto}
                alt="MyPhoto"
                className="landscape:w-3/12 w-3/6"
            />
        </div>
    );
};

export default Home;
