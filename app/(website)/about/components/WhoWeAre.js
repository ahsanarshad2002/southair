"use client";

const WhoWeAre = () => {
  return (
    <>
      <section className="w-full bg-[#F8F8F8]">
        <div className="container-global py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-14 lg:gap-20 items-start">

            {/* Left Content */}
            <div>
              {/* Small Label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-[#0057A6]" />
                <span className="uppercase tracking-[4px] text-[11px] text-[#0057A6] font-medium">
                  Who We Are
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-3xl text-[#132235] font-bold leading-[1.08]
                text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[44px] 3xl:text-[52px]">
                Your Trusted Partner in the
                <br />
                Skies
                <span className="italic font-light">
                  {" "}The Gateway to
                  <br />
                  Pakistan
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-xl text-[#6F7680] leading-8 text-[16px]">
                At South Air, we believe that every journey should be as inspiring
                as the destination itself. Since our founding in 2025, our mission
                has been to connect people, cultures, and opportunities by
                providing a safe, comfortable, and seamless flying experience.
              </p>
            </div>

            {/* Right Stats */}
            <div className="border-l border-[#E9E9E9] lg:pl-14">

              {/* Item */}
              <div className="pb-12 border-b border-[#E6E6E6]">
                <h3 className="text-[64px] md:text-[72px] font-light leading-none text-[#D9D9D9]">
                  2025
                </h3>

                <h4 className="mt-3 uppercase text-[#132235] tracking-[2px] font-semibold text-[13px]">
                  Founded
                </h4>

                <p className="uppercase tracking-[3px] text-[10px] text-[#0057A6] mt-1">
                  A New Era of Aviation
                </p>
              </div>

              {/* Item */}
              <div className="pt-12">
                <h3 className="text-[64px] md:text-[72px] font-light leading-none text-[#D9D9D9]">
                  12+
                </h3>

                <h4 className="mt-3 uppercase text-[#132235] tracking-[2px] font-semibold text-[13px]">
                  Est. Growth
                </h4>

                <p className="uppercase tracking-[3px] text-[10px] text-[#0057A6] mt-1">
                  Expanding Global Network
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;