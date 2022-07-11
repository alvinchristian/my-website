import React from "react";

const Education = () => {
    return (
        <div>
            <h1 className="md:text-2xl text-lg font-semibold text-cyan-400 dark:text-indigo-700 md:mb-4 mb-2">
                Education
            </h1>
            <div className="flex md:flex-row flex-col justify-between">
                <p className="font-sm font-semibold">
                    Tadulako University, Palu, Indonesia
                </p>
                <p className="font-semibold">
                    {" "}
                    Anticipated Grad date: Aug 2023
                </p>
            </div>
            <p className="font-semibold">
                Bachelor of Engineer in Informatics Engineering
            </p>
            <p className="md:mt-2 mt-1">GPA : </p>
            <p>3.95 / 4.0</p>
            <p className="md:mt-2 mt-1">Coursework :</p>
            <p>
                Algorithm and Data Structure, Application Programming Interface
                (API), Databases, Microservices, Pattern Recognition
            </p>
        </div>
    );
};

export default Education;
