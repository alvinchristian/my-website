import React from "react";

const Education = () => {
    return (
        <div>
            <h1 className="md:text-2xl text-lg font-semibold text-sky-500 md:mb-4 mb-2">
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
            <p className="mt-2">GPA : </p>
            <p>3.95 / 4.0</p>
            <p className="mt-2">Coursework :</p>
            <p>
                Algorithm and Data Structure, Application Programming Interface
                (API), Databases, Microservices, Pattern Recognition
            </p>
        </div>
    );
};

export default Education;
