"use client";
import { TiBusinessCard } from "react-icons/ti";
import { IoMdArrowForward } from "react-icons/io";
import BookingTabs from "./BookingTabs";

const HeroSection = () => {
    return (
        <>
            <div className="w-full py-14 xl:py-36 relative">
                {/* Background layer — image + gradient clipped here only */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/home/hero-home-background.webp')] bg-cover bg-center bg-no-repeat"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0)_68%,#1a1a1a_100%)]"></div>
                </div>

                <div className="container-global relative">
                    {/* content */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center mb-14">
                        <div className="bg-[#FFFFFF]/20 border-2 border-[#FFFFFF33] rounded-full flex items-center gap-2 px-6 py-3 xl:mx-auto">
                            <TiBusinessCard className="text-[#FFFFFF]" />
                            <p className="text-[12px] lg:text-[14px] text-[#FFFFFF] uppercase font-semibold">PREMIUM AVIATION REIMAGINED</p>
                        </div>
                        <h1 className="text-[28px] md:text-[34px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] 3xl:text-[72px] leading-normal font-bold w-full xl:max-w-[80%] text-white mt-3">Experience the Spirit of Pakistan</h1>

                        <p className="text-white text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[24px] font-normal w-full lg:max-w-[80%] mt-4">Fly with South Air to over 15 domestic destinations. Premium comfort, world-class service, and the heritage of hospitalit.</p>

                        <div className="flex items-center gap-2 mt-6">
                            <button className="flex items-center gap-2 bg-[#E02020] rounded-full px-10 py-5 text-white font-normal text-[12px] md:text-[16px]">
                                Book Your Flight  <IoMdArrowForward className="text-white" />
                            </button>
                            <button className="border-2 border-[#00136033] bg-[#e9e4e4f0] rounded-full px-6 py-4 text-[#001360] font-normal text-[12px] md:text-[16px]">
                                Explore Destinations
                            </button>
                        </div>
                    </div>

                    <BookingTabs />
                </div>
            </div>
        </>
    )
}
export default HeroSection;