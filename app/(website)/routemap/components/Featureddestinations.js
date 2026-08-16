"use client";

import { useState } from "react";
import Image from "next/image";
import { IoShareSocialOutline, IoPlayOutline, IoImageOutline } from "react-icons/io5";

const destinations = [
    {
        id: "gwd",
        name: "Gwadar",
        image:
            "/routemap/Gwadarocver.jpeg",
    },
    {
        id: "isb",
        name: "Islamabad",
        image:
            "/routemap/isb-cover.jpeg",
    },
    {
        id: "skz",
        name: "Sukkur",
        image:
            "/routemap/Sukkur-cover.jpeg",
    },
    {
        id: "khi",
        name: "Karachi",
        image:
            "/routemap/karachi-cover.jpeg",
    },
    {
        id: "ryk",
        name: "Rahim Yar Khan",
        image:
            "/routemap/ryk-cover.jpeg",
    },
];

const CENTER = Math.floor(destinations.length / 2);

const FeaturedDestinations = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="w-full bg-[#F8F8F8] overflow-hidden">
            <div className="container-global py-16 lg:py-24">

                {/* Heading */}
                <div className="mb-16 text-center">
                    <p className="uppercase tracking-[3px] text-[11px] font-semibold text-[#0057A6]">
                        Featured Destinations
                    </p>
                    <h2
                        className="mt-3 font-bold text-[#132B74]
            text-[28px]
            md:text-[36px]
            lg:text-[44px]
            leading-[1.1]"
                    >
                        Experience the Heart of the Network
                    </h2>
                </div>

                {/* Card Stack */}
                <div className="relative h-[420px] md:h-[480px] flex items-center justify-center">

                    {destinations.map((dest, index) => {
                        const offset = index - CENTER;
                        const isHovered = hovered === index;

                        const baseTranslateX = offset * 90;
                        const baseRotate = offset * 8;
                        const baseTranslateY = Math.abs(offset) * 18;
                        const baseScale = 1 - Math.abs(offset) * 0.06;

                        const transform = isHovered
                            ? "translateX(0px) translateY(-16px) rotate(0deg) scale(1.06)"
                            : `translateX(${baseTranslateX}px) translateY(${baseTranslateY}px) rotate(${baseRotate}deg) scale(${baseScale})`;

                        return (
                            <div
                                key={dest.id}
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                                className="absolute w-[220px] md:w-[260px] h-[340px] md:h-[380px] rounded-2xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,.25)] cursor-pointer transition-all duration-500 ease-out"
                                style={{
                                    transform,
                                    zIndex: isHovered ? 50 : 10 - Math.abs(offset),
                                }}
                            >
                                {/* Background Image */}
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    sizes="260px"
                                    className="object-cover"
                                    priority={index === CENTER}
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1436]/80 via-[#0A1436]/10 to-[#0A1436]/30" />

                                {/* Top Icons */}
                                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                    <span
                                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ${
                                            index === CENTER ? "" : "opacity-60"
                                        }`}
                                    >
                                        <IoImageOutline className="h-4 w-4 text-white" />
                                    </span>

                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                        <IoShareSocialOutline className="h-4 w-4 text-white" />
                                    </span>
                                </div>

                                {/* Center Play Button — only on hovered/front card */}
                                {isHovered && (
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition-opacity duration-300">
                                        <IoPlayOutline className="h-6 w-6 text-white" />
                                    </span>
                                )}

                                {/* City Name */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <span className="h-6 w-[3px] bg-[#0057A6]" />
                                    <h3 className="text-white font-bold text-[22px] md:text-[26px] leading-none">
                                        {dest.name}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default FeaturedDestinations;