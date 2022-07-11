import React, { useState } from "react";
import { FaBars, FaTimes, FaSun, FaStarAndCrescent } from "react-icons/fa";
import { Link } from "react-scroll";
import { images } from "../../assets";
import nightMode from "./nightMode";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [dark, setDark] = useState(false);
    const [setTheme, colorTheme] = nightMode();

    const containers = [
        {
            title: "Home",
        },
        {
            title: "About",
        },
        {
            title: "Projects",
        },
        {
            title: "Contact",
        },
    ];

    return (
        <nav className="fixed w-full flex justify-between items-center backdrop-blur-sm bg-white/30 py-2 px-10">
            <Link
                className="py-2 cursor-pointer"
                to="Home"
                smooth
                duration={500}
            >
                <img src={images.Logo} alt="Logo" className="w-8 h-8" />
            </Link>
            <div className="flex flex-1 items-center justify-end">
                <div className="hidden md:flex flex-1 justify-center">
                    {containers.map(({ title }) => (
                        <Link
                            key={title}
                            className="p-3 mx-4 text-sm font-semibold cursor-pointer text-slate-800 hover:bg-white dark:text-white dark:hover:bg-black rounded-lg"
                            to={title}
                            smooth
                            duration={500}
                        >
                            {title}
                        </Link>
                    ))}
                </div>
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer z-10 md:hidden"
                >
                    {nav ? (
                        <FaTimes
                            size={15}
                            className="text-white dark:text-black"
                        />
                    ) : (
                        <FaBars
                            size={15}
                            className="text-black dark:text-white"
                        />
                    )}
                </div>
                <div className="ml-5 cursor-pointer text-black dark:text-white">
                    {dark ? (
                        <FaStarAndCrescent
                            onClick={() => {
                                setTheme(colorTheme);
                                setDark(false);
                            }}
                        />
                    ) : (
                        <FaSun
                            onClick={() => {
                                setTheme(colorTheme);
                                setDark(true);
                            }}
                        />
                    )}
                </div>
                {nav && (
                    <div className="flex flex-col rounded-lg justify-center items-center top-0 mt-3 mr-6 py-2 w-52 absolute bg-black dark:bg-white">
                        {containers.map(({ title }) => (
                            <Link
                                key={title}
                                className="p-3 my-1 text-sm font-semibold cursor-pointer text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white rounded-lg"
                                to={title}
                                onClick={() => setNav(!nav)}
                                smooth
                                duration={500}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
