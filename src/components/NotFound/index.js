import React from "react";

const NotFound = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen ">
            <div className="flex flex-col justify-center items-center animate-pulse text-black dark:text-white text-6xl font-bold leading-normal">
                <h1>404</h1>
                <h1>Page Not Found</h1>
            </div>
        </div>
    );
};

export default NotFound;
