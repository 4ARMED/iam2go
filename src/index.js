import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import Logo from "./logo.svg";
import ConverterForm from "./components/ConverterForm";

const App = () => {
    const [iamcreds, setIamcreds] = useState({})

    return (
        <div className="grid place-items-center p-20">
            <Logo />
            <div className="text-center p-10 ">
                <h1 className="text-2xl text-[#404040] pb-10">IAM 2 Go</h1>
                <p>A simple tool to convert IAM creds from the AWS metadata service into a format you can use on your machine.</p>
                <p>This can be either environment variable CLI statements or AWS CLI config files.</p>
                <p className="py-6 font-semibold">All conversion is done in the browser. No data is sent anywhere else.</p>
            </div>
            <div className="w-full">
                <ConverterForm />
            </div>
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);