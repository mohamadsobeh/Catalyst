"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInDown } from "@/app/data/animations";

import TeamCarousel from "./Team/TeamCarousel";
import TeamGrid from "./Team/TeamGrid";
import TeamControls from "./Team/TeamControls";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + 4) % 4); 
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % 4);
  };

  return (
    <section className="w-full bg-[#E9E9E9] py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 text-left mb-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* العنوان */}
        <motion.h2
          className="text-[32px] sm:text-[64px] md:text-[92px] lg:text-[124px]
                     font-gilroySemiBold text-[#DC5758] uppercase
                     leading-[100%] tracking-[-0.04em] mb-10"
          variants={fadeInDown}
        >
          OUR TEAM
        </motion.h2>

        <motion.p
          className="text-[18px] sm:text-[28px] md:text-[40px] lg:text-[60px]
                     font-ivyRegular text-[#242221]
                     leading-[100%] tracking-[-0.04em]
                     max-w-[1503px] mb-28"
          variants={fadeInDown}
        >
          OUR TEAM BRINGS TOGETHER EXPERTISE, CREATIVITY, AND A SHARED
          DEDICATION TO QUALITY IN EVERY STAGE OF DESIGN.
        </motion.p>

        {/* الموبايل → كارد واحد */}
        <TeamCarousel
          activeIndex={activeIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />

        {/* التابلت والديسكتوب → شبكة الكروت */}
        <TeamGrid activeIndex={activeIndex} />

        {/* أزرار التحكم */}
        <TeamControls handlePrev={handlePrev} handleNext={handleNext} />
      </motion.div>
    </section>
  );
}
