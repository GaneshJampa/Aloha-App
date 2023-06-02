

const Hero = () => {

    const bannerSource: string = "../assets/banner.jpeg";

    return (
        <div className="relative">
            <img src={bannerSource}
                className="absolute lg:top-0 object-cover w-full h-full" alt="banner" />
            <div className="relative">
                <div className="lg:py-[9.25rem] py-[12rem] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <div className="flex flex-row justify-center">
                        <div className="w-full text-center hero-text">
                            <h1
                                className="lg:text-[8.75rem] lg:leading-[8.25rem] md:text-[6rem] md:leading-[6.5rem] text-[4rem] leading-[3.75rem] font-bold text-white break-all">
                                Welcome
                            </h1>
                            <h1
                                className="lg:text-[8.75rem] lg:leading-[8.25rem] md:text-[6rem] md:leading-[6.5rem] text-[4rem] leading-[3.75rem] font-bold text-white break-all">
                                to Hawaii
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;