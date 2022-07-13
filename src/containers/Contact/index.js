import React from "react";
import { Card, Form } from "../../components";

const Contact = () => {
    return (
        <div
            name="Contact"
            className="flex flex-col pt-10 justify-center items-center w-full h-screen"
        >
            <div className="w-10/12 landscape:w-11/12 landscape:px-4 h-full flex landscape:flex-row flex-col justify-center items-center text-xs font-medium">
                <Card />
                <Form />
            </div>
        </div>
    );
};

export default Contact;
