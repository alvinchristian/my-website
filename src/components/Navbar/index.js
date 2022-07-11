import React, { useState } from "react";
import { FaBars, FaTimes, FaSun, FaStarAndCrescent } from "react-icons/fa";
import { Link } from "react-scroll";
import { images } from "../../assets";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [dark, setDark] = useState(false);

    const containers = [
        {
            id: 1,
            title: "Home",
        },
        {
            id: 2,
            title: "About",
        },
        {
            id: 3,
            title: "Projects",
        },
        {
            id: 4,
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
                    {containers.map(({ id, title }) => (
                        <Link
                            key={id}
                            className="p-3 mx-4 text-sm font-semibold cursor-pointer text-slate-800 hover:bg-white rounded-lg"
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
                    className="cursor-pointer z-10 text-slate-800 md:hidden"
                >
                    {nav ? <FaTimes size={15} /> : <FaBars size={15} />}
                </div>
                <div className="ml-5 cursor-pointer">
                    {dark ? (
                        <FaStarAndCrescent onClick={() => setDark(!dark)} />
                    ) : (
                        <FaSun onClick={() => setDark(!dark)} />
                    )}
                </div>
                {nav && (
                    <div className="flex flex-col rounded-lg justify-center items-center top-0 mt-3 mr-6 py-2 w-52 absolute bg-white">
                        {containers.map(({ id, title }) => (
                            <Link
                                key={id}
                                className="p-3 my-1 text-sm font-semibold cursor-pointer text-slate-800  hover:bg-d3 rounded-lg"
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
