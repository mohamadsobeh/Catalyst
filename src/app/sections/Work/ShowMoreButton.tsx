"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ShowMoreButtonProps {
  onClick: () => void;
}

export default function ShowMoreButton({ onClick }: ShowMoreButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex justify-center mt-10"
    >
      <Button
        onClick={onClick}
        className="bg-[#DC5758] text-white px-8 py-4 rounded-full font-gilroySemiBold hover:bg-[#C73740] transition-all duration-300 hover:scale-105"
      >
        Show more
      </Button>
    </motion.div>
  );
}
