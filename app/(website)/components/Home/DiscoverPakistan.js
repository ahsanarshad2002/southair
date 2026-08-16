"use client";

import { useEffect, useRef, useState } from "react";
import { TbSquareRoundedChevronLeft, TbSquareRoundedChevronRight } from "react-icons/tb";
import { LuHeart } from "react-icons/lu";

const destinations = [
    {
        id: 1,
        label: "Mountain Paradise",
        city: "Skardu",
        price: "18,500",
        image:
            "/home/Skardu-cover.jpeg",
    },
    {
        id: 2,
        label: "Cultural Heart",
        city: "Lahore",
        price: "12,900",
        image:
            "/home/lahore-cover.jpeg",
    },
    {
        id: 3,
        label: "Northern Frontier",
        city: "Gilgit",
        price: "16,200",
        image:
            "/home/Gilgit-cover.jpeg",
    },
    {
        id: 4,
        label: "Coastal Hub",
        city: "Karachi",
        price: "14,500",
        image:
            "/home/karachi-cover.jpeg",
    },
    {
        id: 5,
        label: "Desert Wonder",
        city: "Thar",
        price: "13,700",
        image:
            "/home/thar-cover.jpeg",
    },
    {
        id: 6,
        label: "Valley Escape",
        city: "Hunza",
        price: "17,300",
        image:
            "/home/hunza-cover.jpeg",
    },
    {
        id: 7,
        label: "Historic Capital",
        city: "Islamabad",
        price: "15,100",
        image:
            "/home/islamabad-cover.jpeg",
    },
    {
        id: 8,
        label: "Riverside City",
        city: "Multan",
        price: "11,800",
        image:
            "/home/multan-cover.jpeg",
    },
];

// Match these to your tailwind breakpoints. Adjust the 3xl value if your
// config defines it differently (this assumes 3xl: "1600px").
const BREAKPOINTS = [
    { minWidth: 1600, items: 5 }, // 3xl
    { minWidth: 1280, items: 4 }, // xl
    { minWidth: 1024, items: 3 }, // lg
    { minWidth: 768, items: 2 },  // md
    { minWidth: 0, items: 1 },    // mobile
];

const getItemsPerView = (width) => {
    const match = BREAKPOINTS.find((bp) => width >= bp.minWidth);
    return match ? match.items : 1;
};

const GAP = 24; // px, keep in sync with the gap-6 class below

const DiscoverPakistan = () => {
    const [likedIds, setLikedIds] = useState([]);
    const [itemsPerView, setItemsPerView] = useState(1);
    const [index, setIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const measure = () => {
            const width = el.getBoundingClientRect().width;
            setContainerWidth(width);
            setItemsPerView(getItemsPerView(window.innerWidth));
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const maxIndex = Math.max(destinations.length - itemsPerView, 0);

    // Clamp index whenever itemsPerView changes (e.g. resizing from mobile to desktop)
    useEffect(() => {
        setIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    const toggleLike = (id) => {
        setLikedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const goPrev = () => setIndex((prev) => Math.max(prev - 1, 0));
    const goNext = () => setIndex((prev) => Math.min(prev + 1, maxIndex));

    const cardWidth =
        itemsPerView > 0
            ? (containerWidth - GAP * (itemsPerView - 1)) / itemsPerView
            : 0;
    const translateX = index * (cardWidth + GAP);

    const atStart = index <= 0;
    const atEnd = index >= maxIndex;

    return (
        <div className="w-full bg-linear-to-br from-slate-50 via-slate-50 to-blue-50 py-16">
            <div className="container-global">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
                    <div>
                        <p className="text-[#E02020]/80 text-xs font-bold uppercase tracking-widest mb-3">
                            Recommended Escapes
                        </p>
                        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[44px] 3xl:text-[52px] font-extrabold text-[#E02020] leading-tight">
                            Discover the Unseen
                            <br />
                            Pakistan
                        </h2>
                    </div>

                    <div className="flex items-end justify-end md:justify-normal md:items-center gap-3">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={goPrev}
                            disabled={atStart}
                            className="w-11 h-11 rounded-full bg-[#E02020] flex items-center justify-center text-white hover:bg-[#E02020]/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#E02020]"
                        >
                            <TbSquareRoundedChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={goNext}
                            disabled={atEnd}
                            className="w-11 h-11 rounded-full bg-[#E02020] flex items-center justify-center text-white hover:bg-[#E02020]/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#E02020]"
                        >
                            <TbSquareRoundedChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Slider viewport — overflow hidden, no scrollbar, ever */}
                <div ref={containerRef} className="overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${translateX}px)` }}
                    >
                        {destinations.map((place) => {
                            const isLiked = likedIds.includes(place.id);
                            return (
                                <div
                                    key={place.id}
                                    className="group relative shrink-0 aspect-[3/4] rounded-3xl overflow-hidden shadow-sm"
                                    style={{ width: cardWidth || `calc(100% / ${itemsPerView})` }}
                                >
                                    {/* Background image */}
                                    <img
                                        src={place.image}
                                        alt={place.city}
                                        className="absolute inset-0 object-cover h-full transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Bottom gradient overlay */}
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                                    {/* Like button */}
                                    <button
                                        type="button"
                                        aria-label="Save destination"
                                        onClick={() => toggleLike(place.id)}
                                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                                    >
                                        <LuHeart
                                            className={`w-4 h-4 transition-colors ${
                                                isLiked ? "fill-white text-white" : "text-white"
                                            }`}
                                        />
                                    </button>

                                    {/* Content */}
                                    <div className="absolute inset-x-0 bottom-0 p-5">
                                        <p className="text-white/80 text-xs font-medium mb-1">
                                            {place.label}
                                        </p>
                                        <h3 className="text-white text-xl font-semibold mb-3">
                                            {place.city}
                                        </h3>
                                        <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wide">
                                            From
                                        </p>
                                        <p className="text-white text-lg font-bold">
                                            Rs. {place.price}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverPakistan;