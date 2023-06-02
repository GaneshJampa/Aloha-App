"use client";

import Link from "next/link";

interface ErrorPageProps {
    error: Error,
    reset: () => void,
};

const Error = ({ error, reset }: ErrorPageProps) => {

    return (
        <div className="flex justify-center items-center w-full h-[100vh] bg-[#E6F2F2]">
            <div>
                <div className="p-8 bg-white rounded-lg">
                    <div className="flex flex-col">
                        <p className="font-bold text-3xl text-[#001A1A] mb-3">Uh oh! 😵‍💫</p>
                        <p className="text-red-400 mb-3">Something went wrong.</p>
                        <button title="reset" onClick={reset} className="mb-3 p-3 flex flex-row justify-center items-center hover:text-red-400 bg-red-400 hover:bg-white hover:border-[0.1rem] border-red-400 rounded-lg">
                            <svg className="w-4 mx-2 hover:text-red-400" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                <path d="M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0" fill-rule="evenodd" fill="currentColor"/>
                            </svg>
                            <p>Try Again</p>
                        </button>
                        <Link href="/" title="home" className="p-3 flex flex-row justify-center text-white hover:text-[#008080] rounded-lg bg-[#008080] hover:bg-white hover:border-[0.1rem] border-[#008080]">
                            <p>← Go to home</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;