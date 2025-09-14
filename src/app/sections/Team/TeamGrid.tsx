"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/app/data/animations";
import TeamCard from "./TeamCard";
import { team } from "@/app/data/team";

interface TeamGridProps {
  activeIndex: number;
}

const TeamGrid: React.FC<TeamGridProps> = ({ activeIndex }) => {
  return (
    <motion.div
      className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {team.map((member, index) => (
        <motion.div key={member.id} variants={fadeInUp}>
          <TeamCard {...member} index={index} isActive={index === activeIndex} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TeamGrid;
