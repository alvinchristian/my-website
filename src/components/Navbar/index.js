import React, { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { images } from "../../assets";
import nightMode from "./nightMode";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [dark, setDark] = useState(false);
    const [setTheme, colorTheme] = nightMode();

    const containers = [
        {
            id: 1,
            title: "Home",
            path: "/",
        },
        {
            id: 2,
            title: "About",
            path: "/about",
        },
        {
            id: 3,
            title: "Projects",
            path: "/projects",
        },
        {
            id: 4,
            title: "Contact",
            path: "/contact",
        },
    ];

    return (
        <nav className="fixed w-full flex justify-center">
            <div className="w-11/12 flex justify-between items-center mt-3 md:mt-4 lg:mt-6 px-4 lg:px-8 py-2 backdrop-blur-sm bg-white/20 rounded-xl">
                <div className="w-5 lg:w-6">
                    <Link to="/">
                        <img src={images.Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <div className="hidden landscape:flex md:flex flex-1 justify-evenly ">
                        {containers.map(({ id, title, path }) => (
                            <NavLink
                                key={id}
                                to={path}
                                className={({ isActive }) =>
                                    `${
                                        isActive
                                            ? "underline underline-offset-8"
                                            : null
                                    } 
                                          text-xs lg:text-sm xl:text-base font-semibold py-1 md:py-2 px-2 md:px-3 text-black dark:text-white hover:underline hover:underline-offset-8`
                                }
                            >
                                {title}
                            </NavLink>
                        ))}
                    </div>
                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer z-10 landscape:hidden md:hidden flex"
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
                    <div className="ml-4 landscape:ml-0 cursor-pointer text-black dark:text-white">
                        {dark ? (
                            <FaMoon
                                className="w-4 h-4 lg:w-5 lg:h-5"
                                onClick={() => {
                                    setTheme(colorTheme);
                                    setDark(false);
                                }}
                            />
                        ) : (
                            <FaSun
                                className="w-4 h-4 lg:w-5 lg:h-5"
                                onClick={() => {
                                    setTheme(colorTheme);
                                    setDark(true);
                                }}
                            />
                        )}
                    </div>
                    {nav && (
                        <div className="flex flex-col rounded-lg justify-center items-center top-0 mr-5 py-2 w-1/2 absolute bg-black dark:bg-white">
                            {containers.map(({ id, title, path }) => (
                                <NavLink
                                    key={id}
                                    className="p-2 mx-2 my-1 text-xs font-semibold cursor-pointer text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white rounded-lg"
                                    to={path}
                                    onClick={() => setNav(!nav)}
                                >
                                    {title}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
