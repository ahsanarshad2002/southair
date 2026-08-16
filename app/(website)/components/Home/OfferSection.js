"use client";

import { useEffect, useRef, useState } from "react";
import { TbSquareRoundedChevronLeft, TbSquareRoundedChevronRight, TbPlaneDeparture } from "react-icons/tb";

const tickets = [
    {
        id: 1,
        fromCode: "ISB",
        fromCity: "ISLAMABAD",
        toCode: "KHI",
        toCity: "KARACHI",
        flight: "SA 0102",
        date: "JAN 07",
        price: "8,500",
    },
    {
        id: 2,
        fromCode: "LHE",
        fromCity: "LAHORE",
        toCode: "GWD",
        toCity: "GWADAR",
        flight: "SA 0118",
        date: "JAN 09",
        price: "7,200",
    },
    {
        id: 3,
        fromCode: "KHI",
        fromCity: "KARACHI",
        toCode: "ISB",
        toCity: "ISLAMABAD",
        flight: "SA 0204",
        date: "JAN 11",
        price: "9,800",
    },
    {
        id: 4,
        fromCode: "PEW",
        fromCity: "PESHAWAR",
        toCode: "LHE",
        toCity: "LAHORE",
        flight: "SA 0311",
        date: "JAN 12",
        price: "6,900",
    },
    {
        id: 5,
        fromCode: "MUX",
        fromCity: "MULTAN",
        toCode: "KHI",
        toCity: "KARACHI",
        flight: "SA 0227",
        date: "JAN 14",
        price: "11,300",
    },
    {
        id: 6,
        fromCode: "ISB",
        fromCity: "ISLAMABAD",
        toCode: "GWD",
        toCity: "GWADAR",
        flight: "SA 0356",
        date: "JAN 16",
        price: "12,500",
    },
];

// Match these to your tailwind breakpoints.
const BREAKPOINTS = [
    {minWidth:1440, items:3},
    { minWidth: 1280, items: 2 }, // xl
    { minWidth: 768, items: 1 },  // md
    { minWidth: 0, items: 1 },    // mobile
];

const getItemsPerView = (width) => {
    const match = BREAKPOINTS.find((bp) => width >= bp.minWidth);
    return match ? match.items : 1;
};

const GAP = 24; // px, keep in sync with the gap-6 class below

const BARCODE_BG =
    "repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 4px, #000 4px 5px, transparent 5px 8px, #000 8px 9px, transparent 9px 12px, #000 12px 14px, transparent 14px 17px, #000 17px 18px, transparent 18px 21px, #000 21px 23px, transparent 23px 25px)";

const BoardingPassSlider = () => {
    const [itemsPerView, setItemsPerView] = useState(1);
    const [index, setIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const measure = () => {
            setContainerWidth(el.getBoundingClientRect().width);
            setItemsPerView(getItemsPerView(window.innerWidth));
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const maxIndex = Math.max(tickets.length - itemsPerView, 0);

    useEffect(() => {
        setIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

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
        <div className="w-full bg-slate-50 py-16">
            <div className="container-global">
                {/* Header */}
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
                            Your Boarding Pass
                        </p>
                        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[52px]  font-extrabold text-[#0B1F4B] leading-tight">
                            Fly With South Air
                        </h2>
                    </div>

                    <div className="hidden sm:flex items-center gap-3">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={goPrev}
                            disabled={atStart}
                            className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-slate-400 disabled:hover:border-slate-200"
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

                {/* Slider viewport */}
                <div ref={containerRef} className="overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${translateX}px)` }}
                    >
                        {tickets.map((ticket) => (
                            <div
                                key={ticket.id}
                                className="shrink-0"
                                style={{ width: cardWidth || `calc(100% / ${itemsPerView})` }}
                            >
                                {/* Boarding pass card */}
                                <div className="relative flex h-70 rounded-2xl mb-10 overflow-hidden shadow-xl bg-white">
                                    {/* Left branded panel */}
                                    <div className="relative w-[36%] bg-[#E02020] overflow-hidden flex items-center px-5">
                                        {/* Faint texture pattern */}
                                        <div
                                            className="absolute inset-0 opacity-20"
                                            style={{
                                                backgroundImage:
                                                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                                                backgroundSize: "12px 12px",
                                            }}
                                        />
                                        <TbPlaneDeparture className="absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-20 lg:h-20 text-white/95 rotate-15" />
                                        <div className="relative z-10 ml-auto text-right">
                                            <p className="text-white text-3xl font-extrabold leading-tight">
                                                South
                                            </p>
                                            <p className="text-white text-2xl font-extrabold leading-tight">
                                                Air
                                            </p>
                                        </div>
                                    </div>

                                    {/* Perforation notches at the seam */}
                                    <div className="absolute -top-2.5 left-[56%] -translate-x-1/2 w-5 h-5 rounded-full bg-slate-50 z-10" />
                                    <div className="absolute -bottom-2.5 left-[56%] -translate-x-1/2 w-5 h-5 rounded-full bg-slate-50 z-10" />

                                    {/* Right ticket panel */}
                                    <div className="w-[64%] flex flex-col">
                                        <div className="bg-[#111827] px-4 py-2">
                                            <p className="text-white text-[20px] 3xl:text-[40px] uppercase font-bold tracking-wide">
                                                Spical Offer
                                            </p>
                                        </div>

                                        <div className="flex-1 px-4 py-2.5 flex flex-col justify-between">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-slate-400 uppercase text-[20px] font-semibold">
                                                        From:
                                                    </p>
                                                    <p className="text-[#E02020] font-extrabold text-base leading-tight">
                                                        {ticket.fromCode}
                                                    </p>
                                                    <p className="text-slate-500 text-[7px] font-semibold">
                                                        {ticket.fromCity}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-slate-400 uppercase text-[20px] font-semibold">
                                                        To:
                                                    </p>
                                                    <p className="text-[#E02020] font-extrabold text-base leading-tight">
                                                        {ticket.toCode}
                                                    </p>
                                                    <p className="text-slate-500 text-[7px] font-semibold">
                                                        {ticket.toCity}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex justify-between border-t border-dashed border-slate-200 pt-1.5">
                                                <div>
                                                    <p className="text-slate-400 text-[7px] font-semibold">
                                                        Flight
                                                    </p>
                                                    <p className="text-[#E02020] font-bold text-[9px]">
                                                        {ticket.flight}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-slate-400 text-[20px] font-semibold">
                                                        Date
                                                    </p>
                                                    <p className="text-[#E02020] font-bold text-[9px]">
                                                        {ticket.date}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-col lg:flex-row gap-1 lg:gap-0 mb-2 lg:mb-0 lg:items-center lg:justify-between">
                                                <div>
                                                    <p className="text-slate-400 text-[12px] font-semibold uppercase">
                                                        Fare
                                                    </p>
                                                    <p className="text-amber-600 font-extrabold text-xl leading-tight">
                                                        PKR {ticket.price}
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="text-[12px] font-bold uppercase tracking-wide text-white bg-[#E02020] rounded-full px-3 py-1.5 hover:bg-[#0B1F4B]/90 transition-colors"
                                                >
                                                    Book Now
                                                </button>
                                            </div>

                                            {/* Barcode */}
                                            <div
                                                className="h-6 w-full"
                                                style={{ backgroundImage: BARCODE_BG }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardingPassSlider;