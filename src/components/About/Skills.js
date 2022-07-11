import React from "react";
import {
    SiCplusplus,
    SiCsharp,
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiPhp,
    SiPython,
    SiReact,
    SiRedux,
    SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
    const iconClass = "md:w-7 w-5 md:h-7 h-5";

    const skills = [
        {
            id: 1,
            icon: <SiReact className={iconClass} />,
            title: "React Js",
            hover: "hover:text-sky-400",
        },
        {
            id: 2,
            icon: <SiReact className={iconClass} />,
            title: "React Native",
            hover: "hover:text-sky-400",
        },
        {
            id: 3,
            icon: <SiRedux className={iconClass} />,
            title: "Redux",
            hover: "hover:text-purple-500",
        },
        {
            id: 4,
            icon: <SiJavascript className={iconClass} />,
            title: "Javascript",
            hover: "hover:text-yellow-400",
        },
        {
            id: 5,
            icon: <SiGit className={iconClass} />,

            title: "Git",
            hover: "hover:text-red-500",
        },
        {
            id: 6,
            icon: <SiMysql className={iconClass} />,
            title: "MySQL",
            hover: "hover:text-cyan-600",
        },
        {
            id: 7,
            icon: <SiHtml5 className={iconClass} />,
            title: "HTML",
            hover: "hover:text-orange-600",
        },
        {
            id: 8,
            icon: <SiCss3 className={iconClass} />,
            title: "CSS",
            hover: "hover:text-sky-600",
        },
        {
            id: 9,
            icon: <SiPhp className={iconClass} />,
            title: "PHP",
            hover: "hover:text-indigo-200",
        },
        {
            id: 10,
            icon: <SiCplusplus className={iconClass} />,
            title: "C++",
            hover: "hover:text-blue-500",
        },
    ];

    const familiar = [
        {
            id: 1,
            icon: <SiTailwindcss className={iconClass} />,
            title: "Tailwind",
            hover: "hover:text-teal-500",
        },
        {
            id: 2,
            icon: <SiPython className={iconClass} />,
            title: "Python",
            hover: "hover:text-yellow-500",
        },
        {
            id: 3,
            icon: <SiCsharp className={iconClass} />,
            title: "C#",
            hover: "hover:text-purple-600",
        },
    ];

    return (
        <div className="w-full">
            <h1 className="text-center md:text-2xl text-lg font-semibold text-sky-500 md:mb-4 mb-2">
                Skills
            </h1>
            <div className="w-full flex flex-wrap justify-around items-center">
                {skills.map(({ id, icon, title, hover }) => (
                    <div
                        key={id}
                        className={`md:min-w-fit md:w-2/12 w-3/12 mb-4 flex flex-col justify-center items-center text-slate-800 ${hover}`}
                    >
                        {icon}
                        <p className="mt-2 font-semibold md:flex hidden">
                            {title}
                        </p>
                    </div>
                ))}
            </div>
            <p className="font-semibold my-2">Familiar :</p>
            <div className="w-full flex flex-row justify-around items-center">
                {familiar.map(({ id, icon, title, hover }) => (
                    <div
                        key={id}
                        className={`w-3/12 mb-4 flex flex-col justify-center items-center text-slate-800 ${hover}`}
                    >
                        {icon}
                        <p className="mt-2 font-semibold md:flex hidden">
                            {title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
