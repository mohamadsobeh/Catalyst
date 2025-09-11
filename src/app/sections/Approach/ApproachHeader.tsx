"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerParent } from "./animations";

export default function ApproachHeader() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerParent}
      className="mb-16 md:mb-20 relative"
    >
      <motion.h2
        variants={fadeUp(0)}
        className="font-gilroySemiBold text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[100%] text-[#AAACAC]"
      >
        Our Approach
      </motion.h2>

      <motion.p
        variants={fadeUp(0.15)}
        className="mt-6 text-[18px] leading-[26px] sm:text-[24px] sm:leading-[32px] md:text-[36px] md:leading-[44px] lg:text-[48px] lg:leading-[56px] xl:text-[60px] xl:leading-[64px] tracking-[-0.02em] xl:tracking-[-0.04em] text-[#242221] max-w-[1020px] font-ivy"
      >
        How we work to deliver results that last.
      </motion.p>
    </motion.div>
  );
}
