import React from "react";

const Experiences = () => {
    return (
        <div>
            <h1 className="text-center md:text-2xl text-lg font-semibold text-cyan-400 dark:text-indigo-700 md:mb-4 mb-2">
                Experiences
            </h1>
            <div className="text-justify md:mb-2 mb-1">
                <h1 className="font-semibold text-center">
                    [ Assistant Lecturer - Data Structure]
                </h1>
                <li>
                    Explain and teach based on modules so students can
                    understand and do it
                </li>
                <li>
                    Give assignments and test students to see what they get
                    during practicum
                </li>
                <li>
                    Assess students' grades based on their ability and activity
                </li>
            </div>
            <div className="text-justify">
                <h1 className="font-semibold text-center">
                    [ React Native Bootcamp ]
                </h1>
                <li>
                    Learn about React Native and other related based on Binar
                    Academy's React Native syllabus to be ready for work
                </li>
                <li>Learn to work together as a team to create projects</li>
            </div>
        </div>
    );
};

export default Experiences;
