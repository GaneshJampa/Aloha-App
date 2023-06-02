"use client";
import React from "react";
import { Category } from "@/types/types";
import { useState } from "react";

const CategoryCard:React.FC<{category: Category}> = ({ category }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="py-4 px-6 bg-white rounded-lg">
            <div className="flex flex-row items-center justify-between mb-2">
                <p className="text-[#001A1A]">{category.name}</p>
                <button onClick={() => setOpen(!open)}>
                    <svg className={`w-10 p-3 rounded-full text-[#008080] hover:bg-[#E6F2F2] transition ease-in-out duration-200 ${open && "rotate-90"}`} viewBox="0 0 16 16" fill="none">
                        <path d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z" fill="currentColor" />
                    </svg>
                </button>
            </div>
            <ul className={`transition ease-in-out duration-200 ${!open ? '-mt-2 h-0 overflow-hidden' : 'h-full mb-2 space-y-4 '}`}>
                {
                    category.activities.map(activity =>
                        <li key={activity.title}>
                            <p className="text-[#001A1A] border-b-[1px]">{activity.title}</p>
                        </li>
                    )
                }
                <li>
                    <p className="text-[#001A1A] border-b-[1px]">And more...! 🌍</p>
                </li>
            </ul>
        </div>
    )
}

export default CategoryCard;