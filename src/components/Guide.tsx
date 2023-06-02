
import Link from "next/link";

const Guide = () => {

    const guideImg: string = "../assets/guide-img.png";

    return (
        <div className="lg:w-1/2 px-4">
            <div className="flex">
                <p className="mb-4 font-bold text-[#001A1A]">
                    Travel Guide
                </p>
            </div>
            <div className="flex flex-row p-5 bg-white rounded-lg justify-between">
                <div className="flex flex-col justify-between">
                    <div className="sm:mb-0 mb-10">
                        <p className="mb-1 font-bold text-2xl text-[#001A1A]">Hadwin Malone</p>
                        <p className="text-base text-[#001A1A]">Guide since 2012</p>
                    </div>
                    <Link href="/">
                        <div
                            className="inline-flex font-sans items-center justify-center h-10 px-6 font-bold hover:text-white text-[#008080] transition duration-200 rounded-lg hover:bg-[#008080] bg-white hover:border-0 border-[0.1rem] border-[#008080]"
                            title="Contact"
                        >
                            Contact
                        </div>
                    </Link>
                </div>
                <div className="rounded-full">
                    <img src={guideImg} alt="guide" className="sm:w-full w-16"/>
                </div>
            </div>
        </div>
    )
}

export default Guide