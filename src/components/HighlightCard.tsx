import React from "react";
import { Highlight } from "@/types/types";
import Link from "next/link";

const HighlightCard:React.FC<{highlight: Highlight; index: string;}> = ({ highlight, index }) => {

    return (

        <div className={`${index == '0' ? "ml-4" : ""}${index == '1' ? "mx-4" : ""}${index == '2' ? "mr-4" : ""} lg:w-full w-[24rem] overflow-hidden bg-white rounded-lg shadow-[0_0_16px_rgba(0,128,128,0.16)]`}>
            <Link href={`/activities/${highlight.title}`} title={highlight.title}>
                <img src={highlight.image} className="object-cover w-full max-h-[10rem]" alt={highlight.title} />
                <div className="lg:px-4 py-4 px-6">
                    <p className="mb-1 text-xl font-bold text-[#008080]">
                        {highlight.title}</p>
                    <p className="mb-1 text-[#001A1A]">
                        {highlight.description}
                    </p>
                    <div className="flex justify-end">
                        <button>
                            <svg className={`${index == '1' ? "-mt-6" : ""} lg:mt-0 w-10 p-3 bg-[#E6F2F2] rounded-full text-[#008080] hover:bg-[#008080] hover:text-white transition ease-in-out duration-200`} viewBox="0 0 16 16" fill="none">
                                <path d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Link >
        </div>

    )
}

export default HighlightCard;
