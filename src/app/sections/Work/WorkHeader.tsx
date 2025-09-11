"use client";

import { motion } from "framer-motion";

export default function WorkHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="flex items-start justify-between mb-12"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[28px] sm:text-[36px] md:text-[45px] font-gilroySemiBold text-[#545454]"
        >
          Our Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-6 
            text-[22px] sm:text-[30px] md:text-[60px] 
            leading-[100%] tracking-[-0.04em] 
            text-[#AAACAC] max-w-4xl 
            font-ivy"
        >
          Explore our flagship products built to empower businesses and modernize industries.
        </motion.p>
      </div>
    </motion.div>
  );
}
