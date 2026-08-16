"use client";

import { LuArmchair, LuCoffee, LuUsers, LuPlane } from "react-icons/lu";

const stats = [
    { value: "72", label: "Seats per Aircraft" },
    { value: "4", label: "Aircraft in Fleet" },
    { value: "9+", label: "Cities Connected" },
];

const features = [
    {
        icon: LuArmchair,
        title: "COMFORTABLE SEATING",
        description: "Extra legroom in every row.",
    },
    {
        icon: LuCoffee,
        title: "ONBOARD REFRESHMENTS",
        description: "Complimentary local snacks.",
    },
    {
        icon: LuUsers,
        title: "FRIENDLY CABIN CREW",
        description: "Heritage of hospitality.",
    },
];

const OnboardExperience = () => {
    return (
        <div className="w-full bg-slate-50 py-16 ">
            <div className="container-global">
                <div className="flex flex-col lg:flex-row  lg:items-center xl:justify-between gap-16 ">
                    {/* Left content */}
                    <div className="relative" >
                        <p className="text-[#0B1F4B] text-xs font-bold uppercase tracking-widest mb-3">
                            Onboard Experience
                        </p>
                        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[52px] font-extrabold text-[#E02020] leading-tight mb-5">
                            A New Way to Fly
                            <br />
                            Across Pakistan
                        </h2>
                        <p className="text-slate-500 text-xs xl:text-lg leading-relaxed max-w-lg mb-8">
                            At South Air, we are redefining regional air travel by
                            connecting underserved cities and communities across
                            Pakistan. Our mission is to make flying more accessible,
                            reliable, and comfortable for everyday travelers.
                        </p>

                        {/* Stats */}
                        <div className="flex items-start gap-10 pb-8 mb-8 border-b border-slate-200">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-3xl xl:text-5xl font-extrabold text-[#E02020]/80 mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs xl:text-base text-slate-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-8">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={feature.title} className="flex gap-3 max-w-65">
                                        <div className="shrink-0 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                                            <Icon className="w-4 h-4 text-[#0B1F4B]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-[#0B1F4B] uppercase tracking-wide leading-tight mb-1">
                                                {feature.title}
                                            </p>
                                            <p className="text-xs  text-slate-500 leading-snug">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                            {/* Plane badge - bridges the seam between the two photos */}
                            <div className="absolute -right-0 bottom-20 -translate-y-1/2 w-16 h-16 rounded-full bg-[#E02020] flex items-center justify-center shadow-lg z-30">
                                <LuPlane className="w-6 h-6 text-white rotate-45" />
                            </div>
                        </div>

                    </div>

                    {/* Right image collage */}
                    <div className="relative w-full lg:max-w-[480px] xl:max-w-[530px] h-[420px] md:h-[460px]  xl:h-[520px] mx-auto lg:mx-0">
                        {/* Background image - cockpit, offset to the right/bottom */}
                        <div className="absolute top-[3%] right-0 w-[80%] h-[95%] rounded-[28px] overflow-hidden z-10">
                            <img
                                src="/home/card-2.webp"
                                alt="Cockpit view"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Foreground image - cabin crew, top-left, overlapping the cockpit image */}
                        <div className="absolute top-0 left-0 w-[58%] aspect-[4/5] rounded-2xl border-[6px] border-white overflow-hidden shadow-xl z-20">
                            <img
                                src="/home/card-1.webp"
                                alt="Cabin crew"
                                className="w-full h-full object-cover"
                            />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnboardExperience;