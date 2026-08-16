"use client";

import { CiPlay1 } from "react-icons/ci";

const AboutConnectingDreams = () => {
    return (
        <>
            <section className="w-full bg-[#F8F8F8]">
                <div className="container-global pt-10 pb-10">

                    {/* Heading */}
                    <div className="flex justify-center mb-6 lg:mb-16">
                        <h2 className="text-center text-[#132235] font-bold leading-[1.1] max-w-5xl text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[44px] 3xl:text-[52px]">
                            Connecting Dreams. Elevating Journeys
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-16 items-center">

                        {/* Left Image */}
                        <div className="relative  overflow-hidden s">

                            <img
                                src="/about/aboutconnectingdreams-cover.webp"
                                alt="South Air"
                                className="w-full h-140 rounded-3xl! object-cover"
                            />

                            {/* Play Button */}
                            {/* <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl hover:scale-105 duration-300">
                                <div className="w-16 h-16 rounded-full bg-[#5B5B5B]/80 flex items-center justify-center">
                                    <CiPlay1
                                        size={22}
                                        fill="white"
                                        className="text-white ml-1"
                                    />
                                </div>
                            </button> */}

                            {/* Bottom Label */}
                            {/* <span className="absolute bottom-6 left-6 text-[11px] tracking-[6px] uppercase text-white/70">
                                South Air
                            </span> */}
                        </div>

                        {/* Right Content */}
                        <div className="relative pl-8">

                            {/* Vertical Line */}
                            <div className="absolute left-0 top-2 bottom-2 w-px bg-[#D7D7D7]">
                                <span className="absolute -left-0.5 top-0 w-1.25 h-1.25 rounded-full bg-[#0057A6]" />
                                <span className="absolute -left-0.5 bottom-0 w-1.25 h-1.25 rounded-full bg-[#0057A6]" />
                            </div>

                            <div className="space-y-10">

                                <p className="text-[#5D6672] leading-8 text-[16px]">
                                    South Air is a next-generation domestic airline proudly
                                    rooted in Pakistan with a bold vision to make air travel
                                    accessible, efficient, and affordable for underserved
                                    communities across the country. While major carriers focus
                                    on larger cities, South Air is built to bridge the gap,
                                    linking smaller towns and regions with the national
                                    economic hubs.
                                </p>

                                <p className="text-[#5D6672] leading-8 text-[16px]">
                                    We believe that connectivity is not a privilege, but a
                                    right. With that in mind, South Air is designed to bring
                                    modern, reliable, and comfortable air services to the
                                    people who need it most students, families,
                                    entrepreneurs, and workers from remote and developing
                                    regions who often lack convenient travel options. Our
                                    journey is backed by a passionate team of aviation
                                    professionals, visionary leadership, and a commitment to
                                    innovation in every detail; from intuitive digital
                                    platforms to seamless passenger service. At South Air,
                                    we're not just launching flights we're launching
                                    possibilities. Whether you're flying for education,
                                    family, business, or opportunity, we're here to take you
                                    further.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutConnectingDreams;