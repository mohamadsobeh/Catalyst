"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

export default function PackagesTabs({
  items,
  activeTab,
  setActiveTab,
}: {
  items: { id: string; title: string }[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
      }}
      className="flex w-full overflow-x-auto sm:overflow-visible"
    >
      {items.map((pkg, index) => (
        <motion.button
          key={pkg.id}
          onClick={() => setActiveTab(pkg.id)}
          variants={fadeUp(0)}
          className={`
            flex-shrink-0 sm:flex-1 
            h-[54px] sm:h-[64px] md:h-[78px] 
            px-3 sm:px-5 md:px-8 
            flex items-center justify-center 
            font-gilroySemiBold 
            text-[14px] sm:text-[18px] md:text-[22px] 
            transition-all
            ${activeTab === pkg.id
              ? "bg-white text-[#C73740]"
              : "bg-[#1E1C1B] text-white border border-white/80"}
            ${index === 0 ? "rounded-tl-[14px] sm:rounded-tl-[22px]" : ""}
            ${index === items.length - 1 ? "rounded-tr-[14px] sm:rounded-tr-[22px]" : ""}
          `}
        >
          {pkg.title}
        </motion.button>
      ))}
    </motion.div>
  );
}
