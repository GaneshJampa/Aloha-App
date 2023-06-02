
import Link from "next/link";

const NotFound = () => {

    return (
        <div className="flex justify-center items-center w-full h-[100vh] bg-[#E6F2F2]">
            <div>
                <div className="p-8 bg-white rounded-lg">
                    <div className="flex flex-col">
                        <p className="font-bold text-3xl text-[#001A1A] mb-3">404! 😵‍💫</p>
                        <p className="text-red-400 mb-3">Not found.</p>
                        <Link href="/" title="home" className="p-3 flex flex-row justify-center text-white hover:text-[#008080] rounded-lg bg-[#008080] hover:bg-white hover:border-[0.1rem] border-[#008080]">
                            <p>← Go to home</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;