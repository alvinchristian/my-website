import React from "react";
import { images } from "../../assets";

const Projects = () => {
    const descUlStyle =
        "text-xs xl:text-sm font-medium text-justify leading-normal list flex-col hidden lg:flex pb-2 px-2";
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
            className="w-full h-screen flex justify-center items-center pt-10"
        >
            <div className="w-10/12 h-full landscape:w-11/12 flex flex-col landscape:flex-row justify-center items-center text-slate-800 dark:text-slate-50">
                {Projects.map(({ id, name, href, image, desc }) => (
                    <a
                        key={id}
                        href={href}
                        target={"_blank"}
                        rel="noreferrer"
                        className={`w-10/12 landscape:w-1/3 max-w-xs landscape:max-w-none landscape:h-2/3 flex flex-col justify-center items-center bg-white/20 mb-4 landscape:mb-0 landscape:mx-2 p-2 md:p-4 rounded-xl`}
                    >
                        <img
                            src={image}
                            alt="Projects"
                            className="rounded-lg w-full bg-slate-900 landscape:transition duration-300 ease-in-out landscape:hover:-translate-y-5"
                        />
                        <h1 className="text-xs md:text-sm lg:text-base xl:text-lg font-bold text-center mt-2 flex text-black dark:text-white">
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
