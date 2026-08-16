"use client";

import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

const network = [
    {
        id: "01",
        city: "Islamabad",
        code: "ISB",
        connections: 4,
        tags: ["MBI", "SKZ", "BHV", "RYK"],
    },
    {
        id: "02",
        city: "Karachi",
        code: "KHI",
        connections: 6,
        tags: ["BHV", "PJG", "SKZ", "TUK", "RYK", "GWD"],
    },
    {
        id: "03",
        city: "Sukkur",
        code: "SKZ",
        connections: 3,
        tags: ["UET", "KHI", "ISB"],
    },
    {
        id: "04",
        city: "Quetta",
        code: "UET",
        connections: 2,
        tags: ["SKZ", "GWD"],
    },
    {
        id: "05",
        city: "Bahawalpur",
        code: "BHV",
        connections: 3,
        tags: ["ISB", "LHE", "KHI"],
    },
    {
        id: "06",
        city: "Lahore",
        code: "LHE",
        connections: 2,
        tags: ["BHV", "RYK"],
    },
    {
        id: "07",
        city: "Peshawar",
        code: "PEW",
        connections: 2,
        tags: ["PJG", "TUK"],
    },
    {
        id: "08",
        city: "Turbat",
        code: "TUK",
        connections: 3,
        tags: ["MUX", "KHI", "PEW"],
    },
    {
        id: "09",
        city: "Multan",
        code: "MUX",
        connections: 2,
        tags: ["TUK", "PJG"],
    },
    {
        id: "10",
        city: "Rahim Yar Khan",
        code: "RYK",
        connections: 3,
        tags: ["ISB", "LHE", "KHI"],
    },
    {
        id: "11",
        city: "Gwadar",
        code: "GWD",
        connections: 2,
        tags: ["KHI", "UET"],
    },
];

function HubDetails({ item }) {
    return (
        <div className="p-7">
            <div className="flex items-start justify-between">
                <div>
                    <p className="uppercase tracking-[2px] text-[10px] font-semibold text-white/80">
                        MASTER HUB {item.id}
                    </p>

                    <div className="mt-2 flex items-end gap-2">
                        <h3 className="font-bold text-white text-[26px] md:text-[30px] leading-none">
                            {item.city}
                        </h3>
                        <span className="pb-0.5 text-[16px] font-semibold text-white/80">
                            {item.code}
                        </span>
                    </div>

                    <p className="mt-3 text-[11px] uppercase tracking-[1.5px] text-white/70">
                        {item.connections} Direct Connections
                    </p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                    <span className="h-2 w-2 rounded-full bg-white/80" />
                    <span className="text-[9px] uppercase tracking-[2px] text-white/80">
                        Hub Active
                    </span>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

const NetworkSection = () => {
    const [openItem, setOpenItem] = useState(null); // mobile modal item

    // lock body scroll while mobile modal is open
    useEffect(() => {
        document.body.style.overflow = openItem ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [openItem]);

    return (
        <section className="w-full bg-[#F8F8F8]">
            <div className="container-global py-14 lg:py-20">

                {/* Heading */}
                <div className="mb-12">
                    <p className="uppercase tracking-[3px] text-[11px] font-semibold text-[#D79C18]">
                        Our Network
                    </p>
                    <h2
                        className="mt-3 font-bold text-[#132B74]
            text-[28px]
            md:text-[36px]
            lg:text-[44px]
            xl:text-[52px]
            leading-[1.1]"
                    >
                        Explore Our Connections
                    </h2>
                </div>

                {/* Grid — desktop: hover expands in place. mobile: tap opens overlay modal */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {network.map((item) => (
                        <div
                            key={item.code}
                            onClick={() => {
                                // sirf mobile/tablet (md se neeche) par modal khulay
                                if (window.innerWidth < 768) {
                                    setOpenItem(item);
                                }
                            }}
                            className="group relative overflow-hidden rounded-xl bg-white border border-[#ECECEC] shadow-[0_8px_25px_rgba(0,0,0,.04)] transition-all duration-500 ease-out cursor-pointer md:cursor-default md:hover:-translate-y-1 md:hover:bg-[#c62128] md:hover:border-[#10267A] md:hover:shadow-[0_25px_50px_rgba(0,0,0,.12)]"
                        >
                            {/* Gold Left Border — sirf desktop hover pe */}
                            <div className="absolute left-0 top-0 h-full w-[3px] bg-[#0057A6] scale-y-0 origin-top transition-transform duration-500 ease-out md:group-hover:scale-y-100" />

                            <div className="relative">

                                {/* Default (Compact Row) State */}
                                <div className="px-5 py-5 flex items-center opacity-100 transition-all duration-300 ease-out md:group-hover:opacity-0 md:group-hover:h-0 md:group-hover:py-0 md:group-hover:overflow-hidden">
                                    <h4 className="min-w-fit text-[18px] font-bold text-[#132B74]">
                                        {item.code}
                                    </h4>
                                    <span className="mx-4 h-px w-8 bg-[#0057A6]" />
                                    <p className="text-[11px] uppercase tracking-[1.5px] font-medium text-[#5F6775]">
                                        {item.tags.join(" ")}
                                    </p>
                                </div>

                                {/* Hover (Full Hub Card) State — DESKTOP ONLY */}
                                <div className="hidden md:block max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out md:group-hover:max-h-[300px] md:group-hover:opacity-100">
                                    <HubDetails item={item} />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* MOBILE MODAL — fixed overlay, page flow/scroll se bilkul independent */}
            {openItem && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center px-5 md:hidden"
                    onClick={() => setOpenItem(null)}
                >
                    {/* backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* card */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-sm rounded-xl bg-[#c62128] border border-[#10267A] shadow-[0_25px_50px_rgba(0,0,0,.35)] overflow-hidden animate-[fadeIn_0.2s_ease-out]"
                    >
                        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#0057A6]" />

                        <button
                            type="button"
                            aria-label="Close"
                            onClick={() => setOpenItem(null)}
                            className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
                        >
                            <RxCross1 size={16} />
                        </button>

                        <HubDetails item={openItem} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default NetworkSection;