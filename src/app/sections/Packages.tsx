"use client";

import { useState } from "react";
import { PACKAGES } from "@/app/data/packages";
import { motion, AnimatePresence } from "framer-motion";
import PackagesHeader from "./Packages/PackagesHeader";
import PackagesTabs from "./Packages/PackagesTabs";
import PackageCard from "./Packages/PackageCard";

export default function Packages() {
  const [activeTab, setActiveTab] = useState("starter");
  const activePackage = PACKAGES.items.find((pkg) => pkg.id === activeTab)!;

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative w-full bg-[#1E1C1B] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="relative max-w-screen-xl mx-auto">
        <PackagesHeader subheadline={PACKAGES.subheadline} />
        <PackagesTabs
          items={PACKAGES.items}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="w-full bg-[#FFFFFF] bg-[url('/pattern.png')] bg-repeat">
          <AnimatePresence mode="wait">
            <PackageCard key={activeTab} activePackage={activePackage} />
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
