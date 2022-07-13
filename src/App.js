import React from "react";
import { Navbar, NotFound } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from "./containers";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-gradient-to-b from-d1 via-d2 to-d3 dark:from-n1 dark:via-n2 dark:to-n3">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
