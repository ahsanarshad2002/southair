"use client";

const secondaryCards = [
    {
        image: "/whysouthair/snacks-on-board.png",
        alt: "In-flight meal",
        title: "Mouth-watering Snacks On-board",
        description:
            "Transform your flight into a culinary journey with our globally inspired, locally sourced in-flight menus. We cater to all palates and dietary needs, offering complimentary gourmet meals. Elevate your travel experience from takeoff to landing with a dining menu designed to delight.",
    },
    {
        image: "/whysouthair/exp-crew.png",
        alt: "Cabin crew",
        title: "Experienced Crew",
        description:
            "Our seasoned cockpit and cabin crew bring decades of combined aviation experience to every flight. We are dedicated to delivering a seamless blend of world-class hospitality and uncompromising safety. From the moment you step aboard to your final destination, our crew is committed to making your experience comfortable, memorable, and secure.",
    },
];

const SouthAirExperience = () => {
    return (
        <div className="w-full bg-[#F7F9FB] py-16">
            <div className="container-global">
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-[#E02020] text-center mb-10 lg:mb-12">
                    The South Air Experience
                </h2>

                {/* Featured hero card */}
                <div className="relative rounded-[24px] overflow-hidden shadow-lg mb-6">
                    <img
                        src="/whysouthair/on-time-performance.png"
                        alt="South Air lounge"
                        className="w-full h-[240px] md:h-[300px] xl:h-[360px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#E02020]/75 via-[#E02020]/30 to-transparent" />
                    <div className="absolute left-0 right-0 bottom-0 p-6 md:p-8">
                        <h3 className="text-white font-bold text-base md:text-lg mb-2">
                            On-Time Performance
                        </h3>
                        <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-3xl">
                            At South Air, your time is our top priority. We understand that
                            every journey matters, which is why we continuously optimize our
                            operations to ensure you reach your destination safely and on
                            schedule.
                        </p>
                    </div>
                </div>

                {/* Secondary cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {secondaryCards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-white rounded-[24px] overflow-hidden shadow-sm"
                        >
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="w-full h-[220px] md:h-[260px] object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-[#E02020] font-bold text-sm md:text-base mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SouthAirExperience;