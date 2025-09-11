"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { workItems } from "@/app/data/work";
import WorkGrid from "./Work/WorkGrid";

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? workItems : workItems.slice(0, 4);

  return (
    <section
      id="work"
      className="w-full bg-white py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
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
              className="mt-6 text-[22px] sm:text-[30px] md:text-[60px] leading-[100%] tracking-[-0.04em] text-[#AAACAC] max-w-4xl font-ivy"
            >
              Explore our flagship products built to empower businesses and
              modernize industries.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <WorkGrid items={visibleItems} />

        {/* Show More Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-10"
          >
            <Button
              onClick={() => setShowAll(true)}
              className="bg-[#DC5758] text-white px-8 py-4 rounded-full font-gilroySemiBold hover:bg-[#C73740] transition-all duration-300 hover:scale-105"
            >
              Show more
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
