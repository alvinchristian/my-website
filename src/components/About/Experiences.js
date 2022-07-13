import React from "react";

const Experiences = () => {
    return (
        <div>
            <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-sky-400 dark:text-indigo-900 mb-2 md:mb-4">
                Experiences
            </h1>
            <div className="text-justify mb-1 md:mb-2 lg:mb-4">
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
