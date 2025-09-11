"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

interface AboutValueProps {
  item: {
    id: string;
    title: string;
    desc: string;
  };
  index: number;
  isActive: boolean;
}

const AboutValue = forwardRef<HTMLDivElement, AboutValueProps>(
  ({ item, index, isActive }, ref) => {
    return (
      <motion.div
        data-id={item.id}
        ref={ref}
        variants={fadeUp(index * 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className={`
          border border-[#C2C2C2] 
          px-6 sm:px-12 md:px-24 py-12 md:py-20
          flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20
          transition-all duration-500
          ${isActive ? "bg-[#F7D6D4]" : "bg-[#E9E9E9]"}
          ${index === 0 ? "rounded-t-lg" : ""} 
          ${index === 1 ? "rounded-b-lg" : ""}
        `}
      >
        
        <motion.p
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className={`
            text-[96px] sm:text-[140px] md:text-[180px] lg:text-[216px]
            font-ivy leading-[100%] tracking-[-0.04em] shrink-0
            ${isActive ? "text-[#DC5758]" : "text-[#C2C2C2]"}
          `}
        >
          {item.id}
        </motion.p>

        
        <div className="flex-1 flex flex-col gap-6">
          <motion.h3
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className={`
              text-[32px] sm:text-[40px] md:text-[64px]
              font-gilroySemiBold uppercase leading-[100%] tracking-[-0.04em]
              ${isActive ? "text-[#DC5758]" : "text-[#777]"}
            `}
          >
            {item.title}
          </motion.h3>

          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#242221] font-ivy leading-[150%] max-w-4xl"
          >
            {item.desc}
          </motion.p>
        </div>
      </motion.div>
    );
  }
);

AboutValue.displayName = "AboutValue";
export default AboutValue;
