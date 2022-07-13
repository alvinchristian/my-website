import React from "react";

const Education = () => {
    return (
        <div>
            <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-sky-400 dark:text-indigo-900 mb-2 md:mb-4">
                Education
            </h1>
            <div className="flex flex-col">
                <p className="font-semibold">
                    Tadulako University, Palu, Indonesia
                </p>
                <p> Anticipated Grad date: Aug 2023</p>
            </div>
            <p className="font-semibold">
                Bachelor of Engineer in Informatics Engineering
            </p>
            <p className="font-semibold mt-1 md:mt-2">GPA : </p>
            <p>3.95 / 4.0</p>
            <p className="font-semibold mt-1 md:mt-2">Coursework :</p>
            <p>
                Algorithm and Data Structure, Application Programming Interface
                (API), Databases, Microservices, Pattern Recognition
            </p>
        </div>
    );
};

export default Education;
