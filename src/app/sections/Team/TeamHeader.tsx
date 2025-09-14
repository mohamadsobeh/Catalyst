"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInDown } from "@/app/data/animations";

export default function TeamHeader() {
  return (
    <motion.div
      className="container mx-auto px-4 text-left mb-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="
          text-[32px] sm:text-[64px] md:text-[92px] lg:text-[124px]
          font-gilroySemiBold text-[#DC5758] uppercase
          leading-[100%] tracking-[-0.04em] mb-10
        "
        variants={fadeInDown}
      >
        OUR TEAM
      </motion.h2>

      <motion.p
        className="
          text-[18px] sm:text-[28px] md:text-[40px] lg:text-[60px]
          font-ivyRegular text-[#242221]
          leading-[100%] tracking-[-0.04em]
          max-w-[1503px] mb-28
        "
        variants={fadeInDown}
      >
        OUR TEAM BRINGS TOGETHER EXPERTISE, CREATIVITY, AND A SHARED
        DEDICATION TO QUALITY IN EVERY STAGE OF DESIGN.
      </motion.p>
    </motion.div>
  );
}
