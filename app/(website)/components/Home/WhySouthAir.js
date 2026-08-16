"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { HiOutlineShieldCheck, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const cards = [
  {
    variant: "image",
    eyebrow: "AFFORDABLE",
    title: "Air Travel, Reimagined for Everyone",
    body: "We believe air travel is a right, not a luxury. We're opening the skies to families, professionals, and dreamers from every corner of our homeland in budget-friendly fares.",
    image: "/home/card-1.webp", // replace with real asset
    alt: "South Air cabin crew welcoming passengers",
  },
  {
    variant: "highlight",
    eyebrow: "TRUSTWORTHY",
    title: "Trust in Every Takeoff and Landing",
    body: "Led by veterans of aviation and national service, South Air is built on principles of safety, precision, and care so every flight feels secure.",
    cta: "LEARN MORE",
  },
  {
    variant: "image",
    eyebrow: "SAFE",
    title: "Safety is Our Top Priority",
    body: "From takeoff to landing, we adhere to the highest safety protocols and maintenance standards to ensure every flight is secure, smooth, and reliable.",
    image: "/home/card-2.webp", // replace with real asset
    alt: "Aircraft cockpit at night",
  },
];

// Card heights — center (highlight) card is intentionally taller than the side cards
const SIDE_HEIGHT = "h-[380px] md:h-[540px]";
const CENTER_HEIGHT = "h-[540px] md:h-[620px]";

export default function WhySouthAir() {
  const [itemsPerView, setItemsPerView] = useState(1);
  const [index, setIndex] = useState(0);

  // Determine items-per-view: 1 on mobile, 2 on tablet, 3 (static grid, no slider) on desktop
  useEffect(() => {
    const computeItemsPerView = () => {
      const w = window.innerWidth;
      if (w >= 1024) return 3;
      if (w >= 768) return 2;
      return 1;
    };

    const handleResize = () => {
      const next = computeItemsPerView();
      setItemsPerView(next);
      setIndex((prev) => Math.min(prev, Math.max(cards.length - next, 0)));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(cards.length - itemsPerView, 0);
  const isSlider = itemsPerView < 3;

  const goPrev = useCallback(() => {
    setIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goNext = useCallback(() => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  return (
    <section className="w-full bg-[#0b1a3d] px-6 py-20 md:py-28">
      <div className="container-global text-center">
        {/* Eyebrow + Heading */}
        <p className="mb-3 text-xs xl:text-lg font-bold tracking-[0.2em] text-[#E02020]">
          WHY SOUTH AIR
        </p>
        <h2 className="mx-auto mb-16 max-w-2xl text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[44px] 3xl:text-[52px]  font-bold leading-tight text-white ">
          Built on Trust, Safety, and Accessibility
        </h2>

        {/* Slider viewport */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out md:items-center"
            style={{
              transform: isSlider
                ? `translateX(-${index * (100 / itemsPerView)}%)`
                : "none",
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="shrink-0 px-3 first:pl-0 last:pr-0 md:px-3"
                style={{ width: isSlider ? `${100 / itemsPerView}%` : "33.3333%" }}
              >
                {card.variant === "highlight" ? (
                  <HighlightCard {...card} />
                ) : (
                  <SideCard {...card} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Slider controls — only visible on mobile & tablet */}
        {isSlider && (
          <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={goPrev}
              disabled={index === 0}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition disabled:cursor-not-allowed disabled:opacity-30 enabled:hover:bg-white/10"
            >
              <HiChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
                <span
                  key={dot}
                  className={`h-1.5 rounded-full transition-all ${
                    dot === index ? "w-5 bg-[#E02020]" : "w-1.5 bg-white/25"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={index >= maxIndex}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition disabled:cursor-not-allowed disabled:opacity-30 enabled:hover:bg-white/10"
            >
              <HiChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function SideCard({ eyebrow, title, body, image, alt }) {
  return (
    <div className={`group relative ${SIDE_HEIGHT} overflow-hidden rounded-2xl`}>
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-left">
        <p className="mb-2 text-xs  font-bold tracking-[0.15em] text-[#E02020]">
          {eyebrow}
        </p>
        <h3 className="mb-2 text-[20px] md:text-[22px] lg:text-[26px] xl:text-[28px] 3xl:text-[38px] font-bold leading-snug text-white">
          {title}
        </h3>
        <p className="text-sm xl:text-lg leading-relaxed text-white/75">{body}</p>
      </div>
    </div>
  );
}

function HighlightCard({ eyebrow, title, body, cta }) {
  return (
    <div
      className={`flex ${CENTER_HEIGHT} flex-col  items-center justify-center rounded-2xl bg-[#E02020] px-8 py-10 text-center shadow-2xl shadow-black/30`}
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white">
        <HiOutlineShieldCheck className="h-10 w-10 text-[#E02020]" strokeWidth={1} />
      </div>
      <p className="mb-2 text-xs font-bold tracking-[0.15em] text-[#ffffff]">
        {eyebrow}
      </p>
      <h3 className="mb-4 text-[20px] md:text-[22px] lg:text-[26px] xl:text-[28px] 3xl:text-[38px] font-bold leading-snug text-[#ffffff]">
        {title}
      </h3>
      <p className="mb-7 text-sm xl:text-lg leading-relaxed text-[#ffffff]/80">{body}</p>
      <button className="rounded-full border border-[#ffffff] px-6 py-2.5 text-xs xl:text-base font-bold tracking-wide text-[#ffffff] transition hover:bg-[#E02020] hover:text-[#ffffff]">
        {cta}
      </button>
    </div>
  );
}