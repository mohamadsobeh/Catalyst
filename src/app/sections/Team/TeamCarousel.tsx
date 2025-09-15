// "use client";

// import Image from "next/image";
// import TeamCard from "./TeamCard";
// import { motion } from "framer-motion";
// import { zoomIn } from "@/app/data/animations";
// import { team } from "@/app/data/team";

// interface TeamCarouselProps {
//   activeIndex: number;
//   handlePrev: () => void;
//   handleNext: () => void;
// }

// const TeamCarousel: React.FC<TeamCarouselProps> = ({
//   activeIndex,
//   handlePrev,
//   handleNext,
// }) => {
//   return (
//     <div className="block sm:hidden">
//       <motion.div
//         key={team[activeIndex].id}
//         variants={zoomIn}
//         initial="hidden"
//         animate="show"
//       >
//         <TeamCard {...team[activeIndex]} index={activeIndex} isActive={true} />
//       </motion.div>

//       {/* أزرار التحكم */}
//       <div className="flex justify-center gap-6 mt-10">
//         <button
//           onClick={handlePrev}
//           className="w-[60px] h-[60px] flex items-center justify-center border border-[#000000] rounded-[8px] bg-white hover:bg-gray-100 transition"
//         >
//           <Image src="/prev.svg" alt="Previous" width={40} height={27} />
//         </button>
//         <button
//           onClick={handleNext}
//           className="w-[60px] h-[60px] flex items-center justify-center border border-[#000000] rounded-[8px] bg-white hover:bg-gray-100 transition"
//         >
//           <Image src="/next.svg" alt="Next" width={40} height={27} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TeamCarousel;
