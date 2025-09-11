"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function AboutHeader() {
  return (
    <>
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex items-center justify-between"
      >
        <h2 className="font-gilroySemiBold text-[#AAACAC] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[100%]">
          About us
        </h2>
      </motion.div>

      <motion.p
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="font-ivy text-[20px] sm:text-[28px] md:text-[40px] lg:text-[52px] xl:text-[60px]
          leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[56px] xl:leading-[64px]
          tracking-[-0.04em] text-[#242221] max-w-[1020px]"
      >
        Innovation and expertise at the heart of every solution.
      </motion.p>
    </>
  );
}
