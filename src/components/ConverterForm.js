import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ConverterForm = () => {

    const methods = useForm({ mode: "onChange" })
    const { register, handleSubmit } = methods

    const [error, setError] = useState('')
    const [cliProfile, setCliProfile] = useState('')
    const [shellEnv, setShellEnv] = useState('')

    const handleConversion = (data) => {

        var parsedCreds;
        try {
            parsedCreds = JSON.parse(data.metadataCreds)
            setError('')
        } catch {
            console.error("JSON parse error")
            setError('Invalid JSON');
            return
        }

        let profile = `[profile pentest]\naws_access_key_id = ${parsedCreds.AccessKeyId}\naws_secret_access_key = ${parsedCreds.SecretAccessKey}\n`
        if (parsedCreds.Token) {
            profile = profile + `aws_session_token = ${parsedCreds.Token}`
        }
        setCliProfile(profile)

        let shell = `export AWS_ACCESS_KEY_ID=${parsedCreds.AccessKeyId}\nexport AWS_SECRET_ACCESS_KEY=${parsedCreds.SecretAccessKey}\n`
        if (parsedCreds.Token) {
            shell = shell + `export AWS_SESSION_TOKEN=${parsedCreds.Token}`
        }
        setShellEnv(shell)
    }

    const copyCliProfile = () => {
        var text = document.getElementById("cli-profile")
        navigator.clipboard.writeText(text.value)
    }

    const copyShellEnv = () => {
        var text = document.getElementById("shell-env")
        navigator.clipboard.writeText(text.value)
    }

    return (
        <div className="border border-gray-100 h-full">
            <div className="grid grid-cols-2 grid-rows-2 h-full">
                <div className="row-span-2 border-r p-1 place-items-start">
                    {error && <p class="text-xs text-red-500">{error}</p>}
                    <FormProvider {...methods}>
                        <form className="h-full" onChange={handleSubmit(handleConversion)}>
                            <textarea
                                required
                                id="iam"
                                placeholder="Paste IAM creds from metadata here"
                                className="w-full h-full p-5 text-xs text-[#404040] font-mono outline-none overflow-visible resize-none"
                                {...register("metadataCreds")}
                            />
                        </form>
                    </FormProvider>
                </div>
                <div className="flex border-b border-gray-100 p-10">
                    <textarea id="cli-profile" defaultValue={cliProfile} className="w-full p-5 text-xs text-[#404040] font-mono resize-none" />
                    {cliProfile && 
                    <svg onClick={copyCliProfile} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-#[404040] active:text-primary-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                    }
                </div>
                <div className="flex pt-10 pl-10 pr-10">
                    <textarea id="shell-env" defaultValue={shellEnv} className="w-full p-5 text-xs text-[#404040] font-mono resize-none" />
                    {shellEnv && 
                    <svg onClick={copyShellEnv} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-#[404040] active:text-primary-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                    }
                </div>
            </div>
        </div>
    )
}

export default ConverterForm