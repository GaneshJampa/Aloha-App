import React from "react"
import { Category } from "@/types/types"
import CategoryCard from "./CategoryCard"


const Categories:React.FC<{categories: Category[]}> = ({ categories }) => {

    return (
        <div className="lg:w-1/2 px-4 lg:mb-0 mb-8">
            <div className="flex">
                <p className="mb-4 font-bold text-[#001A1A]">
                    Categories
                </p>
            </div>
            <div className="flex flex-col w-full space-y-2" >
                {categories.map(category => <CategoryCard category={category} key={category.name}/>)}
            </div>
        </div>
    )
}

export default Categories