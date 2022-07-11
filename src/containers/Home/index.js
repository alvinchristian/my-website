import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import { images } from "../../assets";

const Home = () => {
    const iconSize = "md:w-7 w-5 md:h-7 h-5";
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
            className="flex md:flex-row flex-col md:justify-evenly justify-center items-center w-full h-screen bg-gradient-to-b from-d1 to-d4 dark:from-n1 dark:to-n4
            font-medium text-center"
        >
            <div className="my-8 dark:text-slate-50 text-slate-800">
                <h3 className="text-xs md:text-base font-normal text-start">
                    Hello, I'm,
                </h3>
                <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-2 text-black dark:text-white">
                    Alvin Christian
                </h1>
                <h2 className="text-sm md:text-lg border-b-2 border-double border-black dark:border-white">
                    Front End Developer
                </h2>
                <h2 className="text-sm md:text-lg">Mobile Developer</h2>
                <div className="flex justify-evenly mt-3 md:mb-8 mb-4 text-slate-500">
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
                    className="bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black md:px-6 md:py-4 px-4 py-2 md:rounded-xl rounded-lg md:text-sm text-xs font-semibold"
                >
                    Download CV
                </a>
            </div>
            <div>
                <img
                    src={images.MyPhoto}
                    alt="MyPhoto"
                    className="w-52 md:w-80"
                />
            </div>
        </div>
    );
};

export default Home;
