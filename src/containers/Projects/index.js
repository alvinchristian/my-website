import React from "react";
import { images } from "../../assets";

const Projects = () => {
    const descUlStyle =
        "text-xs font-medium text-justify leading-relaxed list md:flex flex-col hidden";
    const Projects = [
        {
            id: 1,
            name: "MovieApp",
            image: images.MovieApp,
            href: "https://github.com/alvinchristian/MovieApp",
            desc: (
                <div className={descUlStyle}>
                    <li className="my-1">
                        Develop a mobile application for Android and IOS to get
                        the latest movie information.
                    </li>
                    <li>
                        Implement Redux for state management, fetch and store
                        data from API using Axios.
                    </li>
                </div>
            ),
        },
        {
            id: 1,
            name: "MovieApp",
            image: images.MovieApp,
            href: "https://github.com/alvinchristian/MovieApp",
            desc: (
                <div className={descUlStyle}>
                    <li className="my-1">
                        Develop a mobile application for Android and IOS to get
                        the latest movie information.
                    </li>
                    <li>
                        Implement Redux for state management, fetch and store
                        data from API using Axios.
                    </li>
                </div>
            ),
        },
        {
            id: 1,
            name: "MovieApp",
            image: images.MovieApp,
            href: "https://github.com/alvinchristian/MovieApp",
            desc: (
                <div className={descUlStyle}>
                    <li className="my-1">
                        Develop a mobile application for Android and IOS to get
                        the latest movie information.
                    </li>
                    <li>
                        Implement Redux for state management, fetch and store
                        data from API using Axios.
                    </li>
                </div>
            ),
        },
    ];

    return (
        <div
            name="Projects"
            className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-d3 to-d2"
        >
            <div>
                <h1 className="md:text-3xl text-xl font-semibold text-slate-800 md:mb-8 mb-4">
                    Projects
                </h1>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-between items-center px-20">
                {Projects.map(({ id, name, href, image, desc }) => (
                    <a
                        key={id}
                        href={href}
                        target={"_blank"}
                        rel="noreferrer"
                        className={`md:w-1/3 w-64 flex flex-col justify-center items-center bg-white/30 md:h-96 h-40 md:my-0 my-2 mx-2 md:p-4 p-2 rounded-xl`}
                    >
                        <img
                            src={image}
                            alt="Projects"
                            className="rounded-lg md:w-full w-56 bg-black"
                        />
                        <h1 className="text-lg font-bold text-center mt-2 md:flex hidden">
                            {name}
                        </h1>
                        {desc}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
