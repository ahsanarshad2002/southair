"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    IoShareSocialOutline,
    IoPlayOutline,
    IoImageOutline,
} from "react-icons/io5";

const destinations = [
    {
        id: "gwd",
        name: "Gwadar",
        image: "/routemap/Gwadarocver.jpeg",
    },
    {
        id: "isb",
        name: "Islamabad",
        image: "/routemap/isb-cover.jpeg",
    },
    {
        id: "skz",
        name: "Sukkur",
        image: "/routemap/Sukkur-cover.jpeg",
    },
    {
        id: "khi",
        name: "Karachi",
        image: "/routemap/karachi-cover.jpeg",
    },
    {
        id: "ryk",
        name: "Rahim Yar Khan",
        image: "/routemap/ryk-cover.jpeg",
    },
];

const CENTER = Math.floor(destinations.length / 2);

const FeaturedDestinations = () => {
    const [hovered, setHovered] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [inView, setInView] = useState(false);

    const sliderRef = useRef(null);
    const sectionRef = useRef(null);

    // Sirf tab track karo jab ye section screen par actually visible ho
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.35 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    // Mobile + Tablet Auto Slider — sirf jab section in view ho tabhi chalay
    useEffect(() => {
        if (!inView) return;

        const slider = sliderRef.current;
        if (!slider) return;

        const interval = setInterval(() => {
            const nextIndex =
                activeSlide === destinations.length - 1
                    ? 0
                    : activeSlide + 1;

            const card = slider.children[nextIndex];

            if (card) {
                // sirf slider container ke andar scroll karo — page ko vertically kabhi mat hilao
                slider.scrollTo({
                    left: card.offsetLeft - slider.offsetLeft,
                    behavior: "smooth",
                });
            }

            setActiveSlide(nextIndex);
        }, 3500);

        return () => clearInterval(interval);
    }, [activeSlide, inView]);

    return (
        <section ref={sectionRef} className="w-full bg-[#F8F8F8] overflow-hidden">
            <div className="container-global py-16 lg:py-24">

                {/* Heading */}
                <div className="mb-16 text-center">
                    <p className="uppercase tracking-[3px] text-[11px] font-semibold text-[#0057A6]">
                        Featured Destinations
                    </p>

                    <h2
                        className="
                            mt-3
                            font-bold
                            text-[#132B74]
                            text-[28px]
                            md:text-[36px]
                            lg:text-[44px]
                            leading-[1.1]
                        "
                    >
                        Experience the Heart of the Network
                    </h2>
                </div>

                {/* =====================================================
                    MOBILE + TABLET
                    AUTO SLIDER — ONE CARD AT A TIME
                ====================================================== */}
                <div className="lg:hidden">

                    <div
                        ref={sliderRef}
                        className="
                            flex
                            gap-5
                            overflow-x-auto
                            snap-x
                            snap-mandatory
                            scroll-smooth
                            px-5
                            pb-2
                            [-ms-overflow-style:none]
                            [scrollbar-width:none]
                            [&::-webkit-scrollbar]:hidden
                        "
                        onScroll={(e) => {
                            const container = e.currentTarget;
                            const cardWidth =
                                container.children[0]?.offsetWidth || 1;

                            const index = Math.round(
                                container.scrollLeft / (cardWidth + 20)
                            );

                            if (index >= 0 && index < destinations.length) {
                                setActiveSlide(index);
                            }
                        }}
                    >
                        {destinations.map((dest, index) => {
                            const isHovered = hovered === index;

                            return (
                                <div
                                    key={dest.id}
                                    onMouseEnter={() =>
                                        setHovered(index)
                                    }
                                    onMouseLeave={() =>
                                        setHovered(null)
                                    }
                                    className="
                                        relative
                                        shrink-0
                                        w-[calc(100vw-40px)]
                                        sm:w-[calc(100vw-64px)]
                                        max-w-[400px]
                                        h-[420px]
                                        md:h-[460px]
                                        rounded-2xl
                                        overflow-hidden
                                        cursor-pointer
                                        snap-center
                                        shadow-none
                                    "
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={dest.image}
                                        alt={dest.name}
                                        fill
                                        sizes="(max-width: 768px) 90vw, 400px"
                                        className="object-cover"
                                        priority={index === 0}
                                    />

                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1436]/80 via-[#0A1436]/10 to-[#0A1436]/30" />

                                    {/* Top Icons */}
                                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">

                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                            <IoImageOutline className="h-4 w-4 text-white" />
                                        </span>

                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                            <IoShareSocialOutline className="h-4 w-4 text-white" />
                                        </span>

                                    </div>

                                    {/* Play Button */}
                                    {isHovered && (
                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm">
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

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-5">
                        {destinations.map((dest, index) => (
                            <button
                                key={dest.id}
                                type="button"
                                onClick={() => {
                                    const slider = sliderRef.current;
                                    const card = slider?.children[index];

                                    if (slider && card) {
                                        slider.scrollTo({
                                            left: card.offsetLeft - slider.offsetLeft,
                                            behavior: "smooth",
                                        });
                                    }

                                    setActiveSlide(index);
                                }}
                                className={`
                                    h-1.5
                                    rounded-full
                                    transition-all
                                    duration-300
                                    ${
                                        activeSlide === index
                                            ? "w-6 bg-[#0057A6]"
                                            : "w-1.5 bg-[#0057A6]/30"
                                    }
                                `}
                                aria-label={`Go to ${dest.name}`}
                            />
                        ))}
                    </div>
                </div>

                {/* =====================================================
                    DESKTOP
                    EXISTING STACK — UNCHANGED
                ====================================================== */}
                <div className="hidden lg:flex relative h-[480px] items-center justify-center">

                    {destinations.map((dest, index) => {
                        const offset = index - CENTER;
                        const isHovered = hovered === index;

                        const baseTranslateX = offset * 90;
                        const baseRotate = offset * 8;
                        const baseTranslateY =
                            Math.abs(offset) * 18;
                        const baseScale =
                            1 - Math.abs(offset) * 0.06;

                        const transform = isHovered
                            ? "translateX(0px) translateY(-16px) rotate(0deg) scale(1.06)"
                            : `translateX(${baseTranslateX}px) translateY(${baseTranslateY}px) rotate(${baseRotate}deg) scale(${baseScale})`;

                        return (
                            <div
                                key={dest.id}
                                onMouseEnter={() =>
                                    setHovered(index)
                                }
                                onMouseLeave={() =>
                                    setHovered(null)
                                }
                                className="
                                    absolute
                                    w-[260px]
                                    h-[380px]
                                    rounded-2xl
                                    overflow-hidden
                                    shadow-[0_25px_50px_rgba(0,0,0,.25)]
                                    cursor-pointer
                                    transition-all
                                    duration-500
                                    ease-out
                                "
                                style={{
                                    transform,
                                    zIndex: isHovered
                                        ? 50
                                        : 10 - Math.abs(offset),
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
                                            index === CENTER
                                                ? ""
                                                : "opacity-60"
                                        }`}
                                    >
                                        <IoImageOutline className="h-4 w-4 text-white" />
                                    </span>

                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                        <IoShareSocialOutline className="h-4 w-4 text-white" />
                                    </span>

                                </div>

                                {/* Center Play Button */}
                                {isHovered && (
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition-opacity duration-300">
                                        <IoPlayOutline className="h-6 w-6 text-white" />
                                    </span>
                                )}

                                {/* City Name */}
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <span className="h-6 w-[3px] bg-[#0057A6]" />

                                    <h3 className="text-white font-bold text-[26px] leading-none">
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