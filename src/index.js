import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import Logo from "./logo.svg";
import ConverterForm from "./components/ConverterForm";

const App = () => {
    const [iamcreds, setIamcreds] = useState({})

    return (
        <div className="flex flex-col h-screen items-center p-20">
            <Logo />
            <div className="text-center p-10 ">
                <h1 className="text-2xl text-[#404040] pb-10">IAM 2 Go</h1>
                <p>A simple tool to convert IAM creds from the AWS metadata service into a format you can use on your machine.</p>
                <p>This can be either environment variable CLI statements or AWS CLI config files.</p>
                <p className="py-6 font-semibold">All conversion is done in the browser. No data is sent anywhere else.</p>
            </div>
            <div className="min-h-full w-full">
                <ConverterForm />
            </div>
            <footer className="p-10">
                <p className="text-xs text-[#404040]">&copy; 2023 <a href="https://www.4armed.com/">4ARMED Limited</a></p>
            </footer>
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);