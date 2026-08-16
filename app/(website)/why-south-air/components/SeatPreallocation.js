"use client";

import { LuArmchair } from "react-icons/lu";

const legend = [
    { label: "Available", className: "bg-white text-slate-400" },
    { label: "Booked", className: "bg-[#E02020] text-white" },
    { label: "Blocked", className: "bg-[#0B1F4B] text-white/60" },
];

// Row-by-row seat status matrix (5 seats per row)
const seatRows = [
    ["available", "available", "blocked", "blocked", "blocked"],
    ["blocked", "available", "booked", "blocked", "blocked"],
    ["blocked", "blocked", "available", "blocked", "blocked"],
];

function seatStyle(status) {
    switch (status) {
        case "booked":
            return "bg-[#E02020] text-white";
        case "blocked":
            return "bg-[#0B1F4B]/60 text-white/50 border border-white/10";
        default:
            return "bg-white text-slate-400";
    }
}

const SeatPreallocation = () => {
    return (
        <div className="w-full bg-[#ffffff] py-16 md:py-20">
            <div className="container-global text-center">
                <h2 className="text-[22px] md:text-[26px] lg:text-[30px] font-extrabold text-[#E02020] mb-4">
                    Preallocation of Seats
                </h2>
                <p className="text-[#0b1a3d] text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12">
                    Preallocate your ideal seat during booking to guarantee maximum
                    comfort and convenience. By securing your preferred location
                    whether it&apos;s extra legroom, window, or aisle you streamline
                    your boarding process and avoid the stress of last-minute, random
                    assignments.
                </p>

                <div className="bg-[#0b1a3d]/5 border border-[#0b1a3d]/10 rounded-[24px] px-6 py-8 md:px-10 md:py-10 max-w-md mx-auto">
                    {/* Legend */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        {legend.map((item) => (
                            <div key={item.label} className="flex items-center gap-2">
                                <span
                                    className={`w-7 h-7 rounded-md flex items-center justify-center ${item.className}`}
                                >
                                    <LuArmchair size={14} />
                                </span>
                                <span className="text-[#0b1a3d] text-[10px] uppercase tracking-widest font-semibold">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Seat grid */}
                    <div className="flex flex-col gap-3">
                        {seatRows.map((row, rowIdx) => (
                            <div
                                key={rowIdx}
                                className="flex justify-center items-center gap-2"
                            >
                                {row.slice(0, 2).map((status, i) => (
                                    <span
                                        key={`l-${i}`}
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${seatStyle(
                                            status
                                        )}`}
                                    >
                                        <LuArmchair size={18} />
                                    </span>
                                ))}
                                <span className="w-6" />
                                {row.slice(2).map((status, i) => (
                                    <span
                                        key={`r-${i}`}
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${seatStyle(
                                            status
                                        )}`}
                                    >
                                        <LuArmchair size={18} />
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatPreallocation;