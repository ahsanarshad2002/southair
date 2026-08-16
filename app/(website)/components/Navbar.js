"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiUsers } from "react-icons/hi";
import Image from "next/image";
import { BsGlobe2 } from "react-icons/bs";
import { RiMenu4Fill } from "react-icons/ri";

import { RxCross1 } from "react-icons/rx";

const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Routemap", href: "/routemap" },
  { label: "WhySouthAir", href: "/why-south-air" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href) => {
    if (href === "/home") {
      return pathname === "/" || pathname === "/home" || pathname?.startsWith("/home/");
    }
    return pathname === href || pathname?.startsWith(href + "/");
};

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0b2a52]/60 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav className=" flex container-global items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Logo */}
        <a href="/home" className="flex items-center gap-3 group">
          <Image src="/southair-logo.png" width={200} height={200} alt="southair-logo" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={[
                    "relative pb-1 text-[15px] transition-colors",
                    active
                      ? "text-white font-semibold"
                      : "text-white/90 font-medium hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                  <span
                    className={[
                      "absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-white transition-all duration-300",
                      active ? "w-full" : "w-0",
                    ].join(" ")}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side: profile icon + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Profile"
            className="flex h-10 w-10 items-center justify-center  text-white  transition-colors hover:bg-white/20"
          >
            <HiUsers className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {mobileOpen ? (
              <RxCross1 className="h-6 w-6" strokeWidth={1.75} />
            ) : (
              <RiMenu4Fill className="h-6 w-6" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-400 ease-in-out",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-[#0b2a52]/80 px-5 pb-5 pt-3 backdrop-blur-xl sm:px-8">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.label}>
                <a 
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "block rounded-lg px-3 py-2.5 text-[15px] transition-colors",
                    active
                      ? "bg-white/10 text-white font-semibold underline underline-offset-4"
                      : "text-white/85 font-medium hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}