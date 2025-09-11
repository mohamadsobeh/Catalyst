"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  viewport: { once: true, amount: 0.2 },
});

export default function PackagesHeader({ subheadline }: { subheadline: string }) {
  return (
    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-8 sm:mb-12">
      <motion.h2
        {...fadeUp(0)}
        className="text-[24px] sm:text-[32px] md:text-[45px] font-gilroySemiBold text-[#545454]"
      >
        Our packages
      </motion.h2>
      <motion.p
        {...fadeUp(0.15)}
        className="
          mt-3 sm:mt-4 
          text-[16px] sm:text-[20px] md:text-[28px] lg:text-[32px] 
          leading-snug max-w-2xl 
          font-ivy font-normal
          mb-12 sm:mb-16 md:mb-24
        "
      >
        {subheadline}
      </motion.p>
    </motion.div>
  );
}
