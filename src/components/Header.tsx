"use client";
import React from 'react';
import { Highlight } from "@/types/types";
import Link from "next/link";
import { useState } from "react";

const Header:React.FC<{highlights: Highlight[]}> = ({ highlights }) => {

    const [open, setOpen] = useState(false);

    const logo: string = "../assets/aloha.svg";

    return (
        <>
            <div className="lg:absolute z-[1000] w-full lg:mt-6">
                <div className="px-6 py-6 mx-auto md:max-w-full lg:w-[71rem] lg:px-6 lg:py-5 bg-white lg:rounded-xl">
                    <div className="relative flex items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" title="Home" >
                                <img src={logo} alt='logo' className="inline-flex items-center mr-20" />
                            </Link>
                            <ul className="flex items-center hidden space-x-10 lg:flex">
                                <li>
                                    <Link href="/" title="Home">
                                        <div className="font-medium tracking-wide text-[#001A1A] transition-colors duration-200 hover:text-gray">Home</div>
                                    </Link>
                                </li>
                                {
                                    highlights.map(highlight =>
                                        <li key={highlight.title}>
                                            <Link href={`/activities/${highlight.title}`} title={highlight.title} >
                                                <div className="font-medium tracking-wide text-[#001A1A] transition-colors duration-200 hover:text-gray">{highlight.title}</div>
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link href="/" title="Book a trip">
                                    <div
                                        className="inline-flex font-sans items-center justify-center h-10 px-6 font-bold text-white hover:text-[#008080] transition duration-200 rounded-lg bg-[#008080] hover:bg-white hover:border-[0.1rem] border-[#008080]">
                                        Book a trip
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div className="lg:hidden">
                            <button title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setOpen(true)}>
                                <svg className="w-7 text-gray-600" viewBox="0 0 30 20" fill="none">
                                    <path d="M0 20V16.6667H30V20H0ZM0 11.6667V8.33333H30V11.6667H0ZM0 3.33333V0H30V3.33333H0Z" fill="#001A1A" />
                                </svg>

                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div hidden={!open} className="fixed top-0 z-[10000] w-[100%] h-[100%] lg:hidden bg-black/80">
                <div className="p-8 absolute z-[10000] w-[94%] h-[100%] left-[6%] lg:hidden bg-white">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                        </div>
                        <div>
                            <button title="Close Menu" className="transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setOpen(false)}>
                                <svg className="w-7 text-gray-600" viewBox="0 0 24 24" fill="none">
                                    <path d="M2.66671 23.6667L0.333374 21.3333L9.66671 12L0.333374 2.66667L2.66671 0.333333L12 9.66667L21.3334 0.333333L23.6667 2.66667L14.3334 12L23.6667 21.3333L21.3334 23.6667L12 14.3333L2.66671 23.6667Z" fill="#001A1A" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <nav>
                        <ul className="space-y-6 py-10">
                            <li>
                                <Link href="/" title="Home">
                                    <div className="font-medium tracking-wide text-[#001A1A] transition-colors duration-200 hover:text-gray">Home</div>
                                </Link>
                            </li>
                            {
                                highlights.map(highlight =>
                                    <li key={highlight.title}>
                                        <Link href={`/activities/${highlight.title}`} title={highlight.title} >
                                            <div className="font-medium tracking-wide text-[#001A1A] transition-colors duration-200 hover:text-gray">{highlight.title}</div>
                                        </Link>
                                    </li>
                                )
                            }
                            <li>
                                <Link href="/" title="Book a trip">
                                    <div
                                        className="inline-flex font-sans items-center justify-center h-10 px-6 font-bold text-white hover:text-[#008080] transition duration-200 rounded-lg bg-[#008080] hover:bg-white hover:border-[0.1rem] border-[#008080]"
                                    >
                                        Book a trip
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )

}

export default Header;