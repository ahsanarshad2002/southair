"use client";
import Image from "next/image";
import {
    LuFacebook,
    LuTwitter,
    LuInstagram,
    LuLinkedin,
    LuPhone,
    LuMessageCircle,
    LuArrowRight,
} from "react-icons/lu";

const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Routemap", href: "/routemap" },
    { label: "Why South Air", href: "/why-south-air" },
    { label: "Executive Corner", href: "/executive-corner" },
];

const legalLinks = [
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Baggage Policy", href: "/baggage-policy" },
    { label: "Refund and Exchange Policy", href: "/refund-exchange-policy" },
    { label: "Air Passenger Rights", href: "/air-passenger-rights" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "FAQs", href: "/faqs" },
];

const socialLinks = [
    { icon: LuFacebook, href: "#", label: "Facebook" },
    { icon: LuTwitter, href: "#", label: "Twitter" },
    { icon: LuInstagram, href: "#", label: "Instagram" },
    { icon: LuLinkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[#0059a6] backdrop-blur-2xl">
            {/* Newsletter bar */}
            <div className="border-b border-white/10">
                <div className="container-global py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h3 className="text-white text-xl md:text-2xl font-bold">
                        Stay Updated on New Routes &amp; Offers
                    </h3>
                    <div className="flex w-full md:w-auto max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 w-full md:w-72 bg-white/10 text-white placeholder:text-white/50 text-sm rounded-l-full px-5 py-3 outline-none border border-white/80 border-r-0"
                        />
                        <button className="bg-[#ffffff] hover:bg-[#E02020]/90 transition-colors text-[#E02020] text-xs font-bold uppercase tracking-wide px-6 rounded-r-full whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="w-full  mt-5 lg:mt-0 mb-5 lg:mb-0 lg:py-16">
                <div className="container-global">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <a href="/home" className="flex items-center gap-3 group  bg-white rounded-md p-4">
                                    <Image src="/southair-logo.png" width={200} height={200} alt="southair-logo" />
                                </a>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed mb-5 max-w-xs">
                                Bridging Distances &amp; Bringing People Closer. Your
                                trusted partner for regional air travel across
                                Pakistan.
                            </p>
                            <div className="flex items-center gap-3">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-9 h-9 rounded-full border border-white/95 flex items-center justify-center text-white/90 hover:text-white hover:border-white/80 transition-colors"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <p className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                                Company
                            </p>
                            <ul className="space-y-3">
                                {companyLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-white/80 text-sm hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <p className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                                Legal
                            </p>
                            <ul className="space-y-3">
                                {legalLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-white/80 text-sm hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <p className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                                Contact
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <LuPhone className="w-4 h-4 text-white mt-1 shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-white/80 uppercase tracking-wide">
                                            Call Center
                                        </p>
                                        <a
                                            href="tel:+9251111222999"
                                            className="text-sm text-white font-semibold hover:underline"
                                        >
                                            051 111 222 999
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <LuMessageCircle className="w-4 h-4 text-white mt-1 shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-white/80 uppercase tracking-wide">
                                            WhatsApp
                                        </p>
                                        <a
                                            href="https://wa.me/9251111222999"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-white font-semibold hover:underline"
                                        >
                                            051 111 222 999
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-6 lg:mt-14 pt-6 border-t border-white/10">
                        <p className="text-white text-xs">
                            South Air (Pvt.) Limited | {new Date().getFullYear()} | All
                            Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;