"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ContactDialog } from "@/components/ui/ContactDialog";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
});

 const slideInLeft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.3 } },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: 40, transition: { duration: 0.3 } },
  };


export default function PackageCard({ activePackage }: { activePackage: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-10 px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12">
      {/* Left Image */}
      <motion.div key={`img-${activePackage.id}`} {...slideInLeft} className="flex items-center justify-center">
        <Image
          src="/packges.svg"
          alt={`${activePackage.title} visual`}
          width={372}
          height={443}
          className="w-[240px] sm:w-[320px] md:w-[372px] h-auto object-contain"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        key={`content-${activePackage.id}`}
        {...slideInRight}
        className="w-full border-[2px] sm:border-[3px] border-[#E7E7E7]/65 rounded-[16px] sm:rounded-[22px]
          px-4 sm:px-6 md:px-[35px] pt-6 sm:pt-8 md:pt-[35px] pb-6 sm:pb-8 md:pb-[35px] flex flex-col justify-between"
      >
        {/* Title + Tagline */}
        <div className="w-full max-w-[531px] flex flex-col gap-4 sm:gap-[31px] mb-4 sm:mb-6">
          <motion.h3 {...fadeUp(0.05)} className="text-[#C73740] font-gilroySemiBold text-[22px] sm:text-[28px] md:text-[40px] leading-tight capitalize">
            {activePackage.title}
          </motion.h3>
          <motion.p {...fadeUp(0.12)} className="text-[#AAACAC] font-ivy text-[16px] sm:text-[20px] md:text-[24px] leading-snug">
            {activePackage.tagline}
          </motion.p>
        </div>

        {/* Details */}
        <div className="w-full max-w-[599px] flex flex-col gap-4 sm:gap-[22px] mb-6 sm:mb-8">
          <motion.h4 {...fadeUp(0.18)} className="text-[#706A63] uppercase font-gilroySemiBold text-[16px] sm:text-[20px] md:text-[24px] leading-snug">
            DETAILS
          </motion.h4>
          <ul className="space-y-3 sm:space-y-[15px] text-black">
            {activePackage.details.map((detail: string, idx: number) => (
              <motion.li key={`${activePackage.id}-detail-${idx}`} {...fadeUp(0.22 + idx * 0.05)} className="flex items-center gap-2 sm:gap-[10px]">
                <div className="flex items-center justify-center bg-[#C73740] w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] md:w-[30px] md:h-[33px] rounded-[4px] shrink-0">
                  <svg width="14" height="10" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5L5.5 10L15 1" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>
                <span className="font-gilroyMedium text-[14px] sm:text-[18px] md:text-[20px] leading-snug text-[#191919] uppercase">
                  {detail}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Price + Timeline + Button */}
        <motion.div {...fadeUp(0.24 + activePackage.details.length * 0.05)} className="w-full flex flex-col gap-6 sm:gap-[32px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[32px] font-ivy">
            <p className="flex items-center gap-2 sm:gap-[9px] text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-snug">
              <span className="text-[#C73740]">$</span>
              <span className="text-[#C73740]">Price</span>
              <span className="text-black">{activePackage.price}</span>
            </p>
            <p className="flex items-center gap-2 text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-snug">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#C73740" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
              </svg>
              <span className="text-[#C73740]">Timeline</span>
              <span className="text-black">{activePackage.timeline}</span>
            </p>
          </div>

          <ContactDialog>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-[300px] md:w-[427px] h-[54px] sm:h-[60px] md:h-[68px] 
                flex items-center justify-center text-[16px] sm:text-[20px] md:text-[24px] 
                font-gilroySemiBold uppercase text-black border-b-2 border-[#C73740] 
                hover:text-[#C73740] transition"
            >
              LET’S DISCUSS YOUR PROJECT
            </motion.button>
          </ContactDialog>
        </motion.div>
      </motion.div>
    </div>
  );
}
