import React from "react";
import { Highlight } from "@/types/types";
import HighlightCard from "./HighlightCard";

const Highlights:React.FC<{highlights: Highlight[]}> = ({ highlights }) => {

    return (
        <div className="w-full bg-white">
            <div className="xl:px-24 lg:px-4 py-12 mx-auto lg:max-w-screen-xl">
                <div className="flex px-4">
                    <p
                        className="font-bold text-[#001A1A]">
                        Highlights
                    </p>
                </div>
                <div className='py-4 overflow-x-auto overscroll-x-auto no-scrollbar w-full'>
                    <div className="flex justify-between w-[64rem] lg:w-full">
                        {highlights.map((highlight, index) => <HighlightCard highlight={highlight} index={index.toString()} key={highlight.title} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights;