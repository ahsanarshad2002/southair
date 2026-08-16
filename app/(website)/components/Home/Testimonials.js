"use client";

import { LuPlane, LuStar } from "react-icons/lu";

const testimonials = [
    {
        id: 1,
        name: "Ahmed Khan",
        city: "Karachi",
        rating: 5,
        quote:
            "South Air has completely changed how I travel for work. The flights are always on time and the comfort is unmatched.",
    },
    {
        id: 2,
        name: "Zainab Bibi",
        city: "Turbat",
        rating: 5,
        quote:
            "Finally, an airline that makes visiting family in Turbat so easy and affordable. The crew was incredibly friendly throughout.",
    },
];

const stats = [
    { value: "10+ DESTINATIONS", label: "Connecting Pakistan" },
    { value: "GROWING FLEET", label: "Modern Aircraft" },
    { value: "THOUSANDS", label: "Of Happy Travelers" },
];

// flex value controls each image's share of the column's total height —
// both columns sit inside the same fixed-height row, so their totals
// always match regardless of these ratios.
const galleryLeft = [
    {
        src: "/home/fasial-mosque.webp",
        alt: "Faisal Mosque Islamabad",
        flex: "flex-[0.25]",
    },
    {
        src: "/home/plan-2.webp",
        alt: "Airplane at sunset",
        flex: "flex-[0.30]",
    },
];

const galleryRight = [
    {
        src: "/home/plan-1.webp",
        alt: "Airplane wing view",
        flex: "flex-[0.15]",
    },
    {
        src: "/home/badshahi-mosque.webp",
        alt: "Badshahi Mosque at dusk",
        flex: "flex-[0.40]",
    },
];

const Testimonials = () => {
    return (
        <div className="w-full bg-white py-16">
            <div className="container-global">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left content */}
                    <div>
                        <p className="text-[#0B1F4B] text-xs font-bold uppercase tracking-widest mb-3">
                            Testimonials
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E02020] leading-tight mb-8">
                            What Our Passengers
                            <br />
                            Say
                        </h2>

                        <div className="space-y-5">
                            {testimonials.map((t) => (
                                <div
                                    key={t.id}
                                    className="border border-slate-200 rounded-2xl p-5"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                <LuPlane className="w-4 h-4 text-blue-500 -rotate-45" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-[#0B1F4B]">
                                                    {t.name}
                                                </p>
                                                <p className="text-xs text-slate-400">{t.city}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-0.5 shrink-0">
                                            {Array.from({ length: t.rating }).map((_, i) => (
                                                <LuStar
                                                    key={i}
                                                    className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed italic">
                                        "{t.quote}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right staggered image gallery — both columns share one fixed height */}
                    <div className="flex items-end justify-end ">
                        <img src="/home/Right Side-Photo Collage.webp" alt="" className="w-full max-w-[70%]" />
                    </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-10 border-t border-slate-200">
                    {stats.map((stat) => (
                        <div key={stat.value} className="text-center">
                            <p className="text-lg md:text-xl font-extrabold text-[#0B1F4B] uppercase tracking-wide mb-1">
                                {stat.value}
                            </p>
                            <p className="text-xs text-slate-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;