"use client";

import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import { WorkItem } from "@/app/data/work";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

interface WorkGridProps {
  items: WorkItem[];
}

export default function WorkGrid({ items }: WorkGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: i * 0.15,
          }}
        >
          <WorkCard item={item} />
        </motion.div>
      ))}
    </div>
  );
}
