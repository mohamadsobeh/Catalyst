"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screens = [
  "/Group1.png",
  "/Group2.png",
  "/Group3.png",
  "/Group4.png",
];

export default function Gif() {
  return (
    <div className="relative w-[230px] h-[700px] overflow-hidden rounded-[2rem]">
      {/* Fade top + shadow */}
      <div
        className="absolute top-0 left-0 w-full h-28 
                   bg-gradient-to-b from-black/20 via-white/90 to-transparent 
                   pointer-events-none z-10"
      />

      {/* Fade bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 
                   bg-gradient-to-t from-white to-transparent 
                   pointer-events-none z-10"
      />

      {/* Screens loop */}
      <motion.div
        className="absolute top-0 left-0 w-full"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...screens, ...screens].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`screen-${i}`}
            width={230}
            height={700}
            className="w-full h-auto"
            priority
          />
        ))}
      </motion.div>
    </div>
  );
}
