import React from "react";
import { Card, Form } from "../../components";

const Contact = () => {
    return (
        <div
            name="Contact"
            className="flex flex-col px-10 justify-center items-center w-full h-screen bg-gradient-to-b from-d2 to-d1 dark:from-n2 dark:to-n1"
        >
            <div>
                <h1 className="md:text-3xl text-xl font-semibold text-black dark:text-white md:mb-8 mb-4">
                    Contact
                </h1>
            </div>
            <div className="flex md:flex-row flex-col w-full justify-center items-center text-xs font-medium">
                <Card />
                <Form />
            </div>
        </div>
    );
};

export default Contact;
