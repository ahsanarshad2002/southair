"use client";

// import { Play } from "lucide-react";

const AboutInnovation = () => {
    return (
        <section className="w-full bg-[#0057A6] mb-10 mt-4">
            <div className="container-global py-14 lg:py-20">

                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div>

                        <h2 className="max-w-4xl text-white font-light leading-[1.08]
                        text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[62px]">
                            Innovation Across Industries,
                            <br />
                            Impact Across Borders
                        </h2>

                        <p className="mt-10 max-w-3xl text-[#dcecff] leading-8 text-[16px]">
                            South Air is proudly backed by SOS Group — a multifaceted
                            conglomerate operating across sectors like Security, Energy,
                            Technology, Healthcare, Education, Shipping, Hospitality, and
                            Aviation. With a global vision and a legacy of excellence,
                            SOS Group brings strength, trust, and infrastructure to every
                            venture. From safeguarding nations to empowering sustainability
                            and progress, our reach goes beyond borders — driving innovation
                            and positive change wherever we go.
                        </p>

                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative overflow-hidden rounded-lg shadow-2xl max-w-[420px]">

                            <img
                                src="/about/about-main-cover.jpeg"
                                alt="South Air"
                                className="w-full h-full object-cover"
                            />

                            {/* Play Button */}
                            {/* <button className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg hover:scale-105 duration-300">
                                    <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center">
                                        <Play
                                            size={18}
                                            fill="white"
                                            className="text-white ml-0.5"
                                        />
                                    </div>
                                </div>
                            </button> */}

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutInnovation;