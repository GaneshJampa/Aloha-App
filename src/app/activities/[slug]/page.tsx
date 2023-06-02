import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { getActivities, getHighlights } from "@/services/services";
import { Activity, Highlight } from "@/types/types";

interface Params {
    params: { slug: string };
}

const ActivityPage = async ({ params: { slug } }: Params) => {

    const highlights: Highlight[] = await getHighlights();
    const activity: Activity = await getActivities(slug);
    const description = activity.description.split(". ");
    
    return (
        <>
            <Header highlights={highlights} />
            <div className="relative">
                <img src={activity.image}
                    className="absolute lg:top-0 object-cover w-full h-full" alt="banner" />
                <div className="relative">
                    <div className="lg:py-[9.25rem] py-[12rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <div className="flex flex-row justify-center">
                            <div className="w-full text-center hero-text">
                                {
                                    activity.name.split(" ").length === 1 ?
                                        (
                                            <h1
                                                className="lg:my-6 my-2 lg:text-[8.75rem] md:text-[6rem] text-[4rem] font-bold text-white break-all">
                                                {activity.name}
                                            </h1>
                                        ) : (
                                            activity.name.split(" ").map(word =>
                                                <h1
                                                    className="lg:text-[8.75rem] lg:leading-[8.25rem] md:text-[6rem] md:leading-[6.5rem] text-[4rem] leading-[3.75rem] font-bold text-white break-all">
                                                    {word}
                                                </h1>
                                            )
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className="xl:px-24 lg:px-4 py-12 mx-auto lg:max-w-screen-xl">
                    <div className="flex flex-col px-4">
                        <p className="font-bold text-[#001A1A] mb-3">
                            Description
                        </p>
                        <p className="text-[#001A1A]">
                            {`${description[0]}.`}
                        </p>
                    </div>
                </div>
                <div className="w-full bg-[#E6F2F2]">
                    <div className="xl:px-24 lg:px-4 py-12 mx-auto lg:max-w-screen-xl">
                        <div className="flex flex-col px-4">
                            <p
                                className="font-bold text-[#001A1A]">
                                {`${description[1]}`}
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2 py-6 px-4">
                            {
                                activity.activities.map(act =>
                                    <div className="py-4 md:px-4 px-2 bg-white white rounded-lg">
                                        <div className="flex flex-row items-center">
                                            <svg className="mr-2 w-10 p-[8px] rounded-full text-[#008080] hover:bg-[#E6F2F2] transition ease-in-out duration-200" viewBox="0 0 24 24" fill="currentColor">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
                                            </svg>
                                            <p className="text-[#001A1A] text-sm">{act.name}</p>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ActivityPage;