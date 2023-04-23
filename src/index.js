import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import Logo from "./logo.svg";
import ConverterForm from "./components/ConverterForm";

const App = () => {
    const [iamcreds, setIamcreds] = useState({})

    return (
        <div className="flex flex-col h-screen items-center p-20">
            <div className="flex h-10 mb-10">
                <Logo />
            </div>
            
            <div className="text-left p-10">
                <h1 className="text-4xl text-[#404040] pb-10">IAM 2 Go</h1>
                <p className="leading-loose text-[#404040]">A simple tool to convert IAM creds from the AWS metadata service into a format you can use on your machine. It provides (*nix) environment variable CLI statements and AWS CLI config files.</p>
                <p className="leading-loose text-[#404040]">Paste the response from an HTTP request (made inside EC2) to <span className="text-primary-500">http://169.254.169.254/latest/meta-data/iam/security-credentials/<span className="font-italic">profileName</span><span></span></span>.</p>
                <p className="leading-loose text-[#404040]">You can get the instance profile name from <span className="text-primary-500">http://169.254.169.254/latest/meta-data/iam/</span>.</p>
                <p className="py-6 font-semibold text-[#404040]">All conversion is done in the browser. No data is sent anywhere else.</p>
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