"use client";

import { useState, useRef, useEffect } from "react";
import { HiUsers } from "react-icons/hi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoIosSearch, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCaretDown, FaCheck } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";

const cities = [
    "Karachi (KHI)",
    "Lahore (LHE)",
    "Islamabad (ISB)",
    "Skardu (KDU)",
    "Dubai (DXB)",
    "Jeddah (JED)",
];

const currencies = ["PKR", "USD", "AED", "GBP", "EUR"];


function DropdownField({ label, value, options, onChange, icon }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative bg-white border border-gray-300  rounded-2xl px-6 py-5">
            <label className="block text-[11px] uppercase tracking-[2px] text-[#E02020] font-semibold mb-2">
                {label}
            </label>

            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="w-full flex justify-between items-center"
            >
                <span className="flex items-center gap-2 font-medium text-lg text-[#1D1D1D]">
                    {icon}
                    {value}
                </span>
                <FaCaretDown
                    size={20}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && (
                <ul className="absolute left-0 right-0 top-full mt-2 z-20 max-h-64 overflow-y-auto rounded-xl border border-gray-300 bg-white shadow-lg animate-[fadeIn_0.15s_ease-out]">
                    {options.map((option) => (
                        <li key={option}>
                            <button
                                type="button"
                                onClick={() => {
                                    onChange(option);
                                    setOpen(false);
                                }}
                                className={`w-full text-left px-5 py-3 text-sm hover:bg-[#F2F4FA] transition ${
                                    option === value
                                        ? "bg-[#EEF1FB] text-[#E02020] font-semibold"
                                        : "text-[#1D1D1D]"
                                }`}
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}


function TabPanel({ activeTab, children }) {
    const [displayedTab, setDisplayedTab] = useState(activeTab);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (activeTab === displayedTab) return;
        setVisible(false);
        const timeout = setTimeout(() => {
            setDisplayedTab(activeTab);
            setVisible(true);
        }, 150);
        return () => clearTimeout(timeout);
    }, [activeTab, displayedTab]);

    return (
        <div
            className={`transition-all duration-200 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            }`}
        >
            {children(displayedTab)}
        </div>
    );
}


function StepProgress({ step, labels, onJump }) {
    return (
        <div className="flex items-center">
            {labels.map((label, i) => {
                const idx = i + 1;
                const done = step > idx;
                const active = step === idx;
                return (
                    <div key={label} className="flex items-center flex-1 last:flex-none">
                        <button
                            type="button"
                            onClick={() => onJump(idx)}
                            className={`h-7 w-7 shrink-0 rounded-full text-xs font-bold flex items-center justify-center transition-colors duration-200 ${
                                active
                                    ? "bg-[#E02020] text-white"
                                    : done
                                    ? "bg-[#0B1F78]/15 text-[#E02020]"
                                    : "bg-[#ECECEC] text-[#888]"
                            }`}
                        >
                            {done ? <FaCheck size={10} /> : idx}
                        </button>
                        <span
                            className={`ml-2 hidden sm:block text-xs font-semibold whitespace-nowrap ${
                                active ? "text-[#E02020]" : "text-[#888]"
                            }`}
                        >
                            {label}
                        </span>
                        {idx < labels.length && (
                            <div
                                className={`mx-3 h-[2px] flex-1 rounded-full transition-colors duration-200 ${
                                    done ? "bg-[#E02020]" : "bg-[#ECECEC]"
                                }`}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function StepNav({ onBack, onNext, showBack = true, nextLabel, nextIcon }) {
    return (
        <div className="flex items-end gap-3">
            {showBack && (
                <button
                    type="button"
                    onClick={onBack}
                    aria-label="Back"
                    className="w-16 rounded-2xl h-12.5 border border-gray-300 bg-white hover:bg-[#F2F4FA] flex items-center justify-center transition-all duration-200"
                >
                    <IoIosArrowBack size={22} />
                </button>
            )}
            <button
                type="button"
                onClick={onNext}
                className="px-8 rounded-2xl h-12.5 bg-[#E02020]/80 hover:bg-[#E02020] text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            >
                {nextLabel ?? "Next"}
                {nextIcon ?? <IoIosArrowForward size={20} />}
            </button>
        </div>
    );
}

export default function BookingTabs() {
    const [activeTab, setActiveTab] = useState("schedule");

    return (
        <section className="container-global">
            <div className="rounded-[36px] booking-card shadow-2xl ">
                {/* Tabs */}
                <div className="flex flex-wrap items-center gap-3 p-7 pb-5">
                    <button
                        onClick={() => setActiveTab("schedule")}
                        className={`px-8 h-12 rounded-full text-sm font-semibold transition-all duration-200 ${
                            activeTab === "schedule"
                                ? "bg-[#E02020] text-white"
                                : "bg-[#ECECEC] text-[#555]"
                        }`}
                    >
                        Schedule
                    </button>

                    <button
                        onClick={() => setActiveTab("book")}
                        className={`px-8 h-12 rounded-full text-sm font-semibold transition-all duration-200 ${
                            activeTab === "book"
                                ? "bg-[#E02020] text-white"
                                : "bg-[#ECECEC] text-[#555]"
                        }`}
                    >
                        Book
                    </button>

                    <button
                        onClick={() => setActiveTab("modify")}
                        className={`px-8 h-12 rounded-full text-sm font-semibold transition-all duration-200 ${
                            activeTab === "modify"
                                ? "bg-[#E02020] text-white"
                                : "bg-[#ECECEC] text-[#555]"
                        }`}
                    >
                        Modify
                    </button>
                </div>

                {/* Content */}
                <div className="px-7 pb-7">
                    <TabPanel activeTab={activeTab}>
                        {(tab) => (
                            <>
                                {tab === "schedule" && <ScheduleTab />}
                                {tab === "book" && <BookTab />}
                                {tab === "modify" && <ModifyTab />}
                            </>
                        )}
                    </TabPanel>
                </div>
            </div>
        </section>
    );
}

function ScheduleTab() {
    const [from, setFrom] = useState("Karachi (KHI)");
    const [to, setTo] = useState("Skardu (KDU)");

    const handleViewSchedule = () => {
        console.log({ from, to });
    };

    return (
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_auto] gap-5">
            <DropdownField label="From" value={from} options={cities} onChange={setFrom} />
            <DropdownField label="To" value={to} options={cities} onChange={setTo} />

            {/* WEEK */}
            <div className="rounded-2xl border border-gray-300 bg-white px-6 py-5">
                <label className="text-[11px] uppercase tracking-[2px] text-[#E02020] font-semibold block mb-2">
                    Week Of
                </label>

                <button className="flex items-center justify-between w-full">
                    <span className="text-lg font-semibold">Oct 24, 2026</span>
                    <FaRegCalendarDays size={20} />
                </button>
            </div>

            {/* BUTTON */}
            <button
                onClick={handleViewSchedule}
                className=" px-8 py-4 rounded-2xl bg-[#E02020] hover:bg-[#c81717] text-white font-semibold flex items-center justify-center gap-3 transition-all duration-200"
            >
                <FaRegCalendarDays size={22} />
                View Schedule
            </button>
        </div>
    );
}


function BookTab() {
    const [from, setFrom] = useState("Karachi (KHI)");
    const [to, setTo] = useState("Skardu (KDU)");
    const [tripType, setTripType] = useState("return");
    const [currency, setCurrency] = useState("PKR");
    const [step, setStep] = useState(1);

    const stepLabels = ["Trip & Currency", "Route & Passengers", "Travel Dates", "Promo & Search"];
    const totalSteps = stepLabels.length;

    const goNext = () => setStep((s) => Math.min(s + 1, totalSteps));
    const goBack = () => setStep((s) => Math.max(s - 1, 1));
    const goTo = (idx) => setStep(idx);

    const handleSearch = () => {
        console.log({ from, to, tripType, currency });
    };

    return (
        <div className="space-y-5">
            <StepProgress step={step} labels={stepLabels} onJump={goTo} />

            {/* STEP 1 — Trip type + currency */}
            {step === 1 && (
                <div className="grid lg:grid-cols-[1fr_1fr_auto] gap-5">
                    <div className="bg-white border border-gray-300 rounded-2xl px-6 py-5">
                        <label className="block text-[11px] uppercase tracking-[2px] text-[#E02020] font-semibold mb-2">
                            Trip Type
                        </label>
                        <div className="inline-flex rounded-full bg-[#ECECEC] p-1 w-full">
                            <button
                                onClick={() => setTripType("return")}
                                className={`flex-1 h-9 rounded-full text-sm font-semibold transition duration-200 ${
                                    tripType === "return" ? "bg-[#E02020] text-white" : "text-[#555]"
                                }`}
                            >
                                Return
                            </button>
                            <button
                                onClick={() => setTripType("oneway")}
                                className={`flex-1 h-9 rounded-full text-sm font-semibold transition duration-200 ${
                                    tripType === "oneway" ? "bg-[#E02020] text-white" : "text-[#555]"
                                }`}
                            >
                                One Way
                            </button>
                        </div>
                    </div>

                    <DropdownField
                        label="Currency"
                        value={currency}
                        options={currencies}
                        onChange={setCurrency}
                    />

                    <StepNav showBack={false} onNext={goNext} />
                </div>
            )}

            {/* STEP 2 — Route + passengers */}
            {step === 2 && (
                <div className="grid lg:grid-cols-[1fr_70px_1fr_1fr_auto] gap-5">
                    <DropdownField label="From" value={from} options={cities} onChange={setFrom} />

                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => {
                                const temp = from;
                                setFrom(to);
                                setTo(temp);
                            }}
                            className="h-14 w-14 rounded-full bg-white border border-gray-300 shadow hover:rotate-180 transition-all duration-300"
                        >
                            <LuArrowLeftRight size={20} className="mx-auto" />
                        </button>
                    </div>

                    <DropdownField label="To" value={to} options={cities} onChange={setTo} />

                    <div className="bg-white border border-gray-300 rounded-2xl px-6 py-5">
                        <label className="block text-[11px] uppercase tracking-[2px] text-[#E02020] font-semibold mb-2">
                            Passengers
                        </label>
                        <button className="w-full flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <HiUsers size={18} />
                                <span>1 Adult, 0 Child</span>
                            </div>
                            <FaCaretDown size={20} />
                        </button>
                    </div>

                    <StepNav onBack={goBack} onNext={goNext} />
                </div>
            )}

            {/* STEP 3 — Dates */}
            {step === 3 && (
                <div
                    className={`grid gap-5 ${
                        tripType === "return" ? "lg:grid-cols-[1fr_1fr_auto]" : "lg:grid-cols-[1fr_auto]"
                    }`}
                >
                    <div className="bg-white border border-gray-300 rounded-2xl px-6 py-5">
                        <label className="block text-[11px] uppercase tracking-[2px] text-[#E02020] font-semibold mb-2">
                            Departure Date
                        </label>
                        <button className="w-full flex justify-between items-center">
                            <span className="font-semibold text-lg">Oct 24, 2026</span>
                            <FaRegCalendarDays size={20} />
                        </button>
                    </div>

                    {tripType === "return" && (
                        <div className="bg-white border border-gray-300 rounded-2xl px-6 py-5 animate-[fadeIn_0.2s_ease-out]">
                            <label className="block text-[11px] uppercase tracking-[2px] text-[#E02020] font-semibold mb-2">
                                Return Date
                            </label>
                            <button className="w-full flex justify-between items-center">
                                <span className="font-semibold text-lg">Oct 31, 2026</span>
                                <FaRegCalendarDays size={20} />
                            </button>
                        </div>
                    )}

                    <StepNav onBack={goBack} onNext={goNext} />
                </div>
            )}

            {/* STEP 4 — Promo + search */}
            {step === 4 && (
                <div className="grid lg:grid-cols-[1fr_auto_auto] gap-5">
                    <div>
                        <label className="block text-[11px] uppercase tracking-[2px] text-[#E02020] font-semibold mb-2">
                            Promo Code
                        </label>
                        <input
                            placeholder="Optional"
                            className="w-full h-[92px] rounded-2xl border border-gray-300 bg-white px-5 outline-none focus:border border-gray-300-[#0B1F78]"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={goBack}
                        aria-label="Back"
                        className="h-full min-h-[92px] w-16 rounded-2xl border border-gray-300 bg-white hover:bg-[#F2F4FA] flex items-center justify-center transition-all duration-200"
                    >
                        <IoIosArrowBack size={22} />
                    </button>

                    <button
                        onClick={handleSearch}
                        className="h-full min-h-[92px] px-10 rounded-2xl bg-[#E02020] hover:bg-red-700 text-white font-semibold flex items-center justify-center gap-3 transition-all duration-200"
                    >
                        <IoIosSearch size={20} />
                        Search Flights
                    </button>
                </div>
            )}
        </div>
    );
}

function ModifyTab() {
    const [pnr, setPnr] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFindBooking = () => {
        console.log({ pnr, lastName });
    };

    return (
        <div className="space-y-6">
            <div className="grid lg:grid-cols-[1fr_1fr_auto] gap-5">
                {/* Booking Reference */}
                <div>
                    <label className="block text-[11px] uppercase tracking-[2px] text-[#E02020] font-semibold mb-2">
                        Booking Reference (PNR)
                    </label>

                    <input
                        value={pnr}
                        onChange={(e) => setPnr(e.target.value)}
                        placeholder="e.g. ER47QW"
                        className="w-full h-14 rounded-xl border border-gray-300 bg-white px-5 outline-none focus:border border-gray-300-[#0B1F78]"
                    />

                    <p className="mt-2 text-xs text-gray-500">
                        6-character alphanumeric booking reference
                    </p>
                </div>

                {/* Last Name */}
                <div>
                    <label className="block text-[11px] uppercase tracking-[2px] text-[#E02020] font-semibold mb-2">
                        Last Name
                    </label>

                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="e.g. Ali"
                        className="w-full h-14 rounded-xl border border-gray-300 bg-white px-5 outline-none focus:border border-gray-300-[#0B1F78]"
                    />

                    <p className="mt-2 text-xs text-gray-500">As shown on your ticket</p>
                </div>

                {/* Button */}
                <button
                    onClick={handleFindBooking}
                    className="mt-7 h-14 px-10 rounded-full bg-[#E02020] hover:bg-red-700 text-white font-semibold flex items-center justify-center gap-3"
                >
                    <IoIosSearch size={20} />
                    Find My Booking
                </button>
            </div>
        </div>
    );
}