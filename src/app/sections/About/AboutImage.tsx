"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInRight } from "./animations";

export default function AboutImage() {
  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="w-full"
    >
      <Image
        src="/about.jpg"
        alt="About us team"
        width={1654}
        height={885}
        className="w-full h-auto object-cover rounded-lg"
        priority
      />
    </motion.div>
  );
}
