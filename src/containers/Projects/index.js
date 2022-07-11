import React from "react";
import { images } from "../../assets";

const Projects = () => {
    const descUlStyle =
        "text-xs font-medium text-justify leading-relaxed list md:flex flex-col hidden pb-2 px-2";
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
            id: 2,
            name: "E-Commerce",
            image: images.Ecommerce,
            href: "https://github.com/Kelompok4-RN2-Binar/UsedGoods",
            desc: (
                <div className={descUlStyle}>
                    <li className="my-1">
                        Develop a mobile application as a place for buying and
                        selling used goods online
                    </li>
                    <li>
                        Implement Redux for state management, CRUD, and store
                        data from API using Axios
                    </li>
                    <li>Using GitHub Action for CI/CD</li>
                </div>
            ),
        },
        {
            id: 3,
            name: "PokemonApp",
            image: images.PokemonApp,
            href: "https://github.com/alvinchristian/PokemonApp",
            desc: (
                <div className={descUlStyle}>
                    <li className="my-1">
                        Develop a mobile application to get the pokemon
                        information, using axios to fetch data from API
                    </li>
                    <li>
                        Using firebase authentication and realtime database to
                        store catched pokemon
                    </li>
                </div>
            ),
        },
    ];

    return (
        <div
            name="Projects"
            className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-d3 to-d2 dark:from-n3 dark:to-n2"
        >
            <div>
                <h1 className="md:text-3xl text-xl font-semibold text-black dark:text-white md:mb-8 mb-4">
                    Projects
                </h1>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-between items-center md:px-20 text-slate-800 dark:text-slate-50">
                {Projects.map(({ id, name, href, image, desc }) => (
                    <a
                        key={id}
                        href={href}
                        target={"_blank"}
                        rel="noreferrer"
                        className={`w-fit md:h-96 h-fit flex flex-col justify-center items-center bg-white/20 md:m-2 mb-1 p-2 rounded-xl`}
                    >
                        <img
                            src={image}
                            alt="Projects"
                            className="rounded-lg md:w-full w-56 bg-slate-900"
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
