"use client";

import Image from "next/image";
import { useState } from "react";
import { PACKAGES } from "@/app/data/packages";
import { ContactDialog } from "@/components/ui/ContactDialog";

export default function Packages() {
  const [activeTab, setActiveTab] = useState("starter");
  const activePackage = PACKAGES.items.find((pkg) => pkg.id === activeTab)!;

  return (
    <section className="relative w-full bg-[#1E1C1B] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[32px] md:text-[45px] font-gilroySemiBold text-[#545454]">
            Our packages
          </h2>
          <p className="mt-3 sm:mt-4 text-[16px] sm:text-[20px] md:text-[28px] lg:text-[32px] leading-snug max-w-2xl font-ivy font-normal">
            {PACKAGES.subheadline}
          </p>
        </div>

        {/* Tabs List */}
        <div className="flex w-full border-b border-white overflow-x-auto sm:overflow-visible">
          {PACKAGES.items.map((pkg, index) => (
            <button
              key={pkg.id}
              onClick={() => setActiveTab(pkg.id)}
              className={`
                flex-shrink-0 sm:flex-1 
                h-[54px] sm:h-[64px] md:h-[78px] 
                px-3 sm:px-5 md:px-8 
                flex items-center justify-center 
                font-gilroySemiBold 
                text-[14px] sm:text-[18px] md:text-[22px] 
                transition-all
                ${
                  activeTab === pkg.id
                    ? "bg-white text-[#C73740]"
                    : "bg-[#1E1C1B] text-white border border-white/80"
                }
                ${index === 0 ? "rounded-tl-[14px] sm:rounded-tl-[22px]" : ""}
                ${
                  index === PACKAGES.items.length - 1
                    ? "rounded-tr-[14px] sm:rounded-tr-[22px]"
                    : ""
                }
              `}
            >
              {pkg.title}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="w-full bg-[#FFFFFF] bg-[url('/pattern.png')] bg-repeat">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-10 px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12">
            {/* Left Image */}
            <div className="flex items-center justify-center">
              <Image
                src="/packges.svg"
                alt={`${activePackage.title} visual`}
                width={372}
                height={443}
                className="w-[240px] sm:w-[320px] md:w-[372px] h-auto object-contain"
              />
            </div>

            {/* Right Content */}
            <div
              className="w-full border-[2px] sm:border-[3px] border-[#E7E7E7]/65 rounded-[16px] sm:rounded-[22px]
                 px-4 sm:px-6 md:px-[35px] pt-6 sm:pt-8 md:pt-[35px] pb-6 sm:pb-8 md:pb-[35px] flex flex-col justify-between"
            >
              {/* Title + Tagline */}
              <div className="w-full max-w-[531px] flex flex-col gap-4 sm:gap-[31px] mb-4 sm:mb-6">
                <h3
                  className="text-[#C73740] font-gilroySemiBold 
               text-[22px] sm:text-[28px] md:text-[40px] leading-tight capitalize"
                >
                  {activePackage.title}
                </h3>
                <p
                  className="text-[#AAACAC] font-ivy 
               text-[16px] sm:text-[20px] md:text-[24px] leading-snug"
                >
                  {activePackage.tagline}
                </p>
              </div>

              {/* Details */}
              <div className="w-full max-w-[599px] flex flex-col gap-4 sm:gap-[22px] mb-6 sm:mb-8">
                <h4 className="text-[#706A63] uppercase font-gilroySemiBold text-[16px] sm:text-[20px] md:text-[24px] leading-snug">
                  DETAILS
                </h4>
                <ul className="space-y-3 sm:space-y-[15px] text-black">
                  {activePackage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 sm:gap-[10px]">
                      <div className="flex items-center justify-center bg-[#C73740] w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[33px] rounded-[4px] shrink-0">
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 16 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.5L5.5 10L15 1"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <span className="font-gilroyMedium text-[14px] sm:text-[18px] md:text-[20px] leading-snug text-[#191919] uppercase">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price + Timeline + Button */}
              <div className="w-full flex flex-col gap-6 sm:gap-[32px]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[32px] font-ivy">
                  <p className="flex items-center gap-2 sm:gap-[9px] text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-snug">
                    <span className="text-[#C73740]">$</span>
                    <span className="text-[#C73740]">Price</span>
                    <span className="text-black">{activePackage.price}</span>
                  </p>
                  <p className="flex items-center gap-2 text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-snug">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#C73740"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                    </svg>
                    <span className="text-[#C73740]">Timeline</span>
                    <span className="text-black">{activePackage.timeline}</span>
                  </p>
                </div>

                {/* Contact Button (بدون Dialog) */}
                <ContactDialog>
                  <button
                    className="w-full sm:w-[300px] md:w-[427px] h-[54px] sm:h-[60px] md:h-[68px] 
                    flex items-center justify-center text-[16px] sm:text-[20px] md:text-[24px] 
                    font-gilroySemiBold uppercase text-black border-b-2 border-[#C73740] 
                    hover:text-[#C73740] transition"
                  >
                    LET’S DISCUSS YOUR PROJECT
                  </button>
                </ContactDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
