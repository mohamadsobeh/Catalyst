// "use client";

// import Image from "next/image";

// interface TeamControlsProps {
//   handlePrev: () => void;
//   handleNext: () => void;
// }

// const TeamControls: React.FC<TeamControlsProps> = ({
//   handlePrev,
//   handleNext,
// }) => {
//   return (
//     <div className="hidden sm:flex justify-center gap-6 mt-20">
//       <button
//         onClick={handlePrev}
//         className="w-[60px] sm:w-[74px] h-[60px] sm:h-[74px] flex items-center justify-center border border-[#000000] rounded-[8px] bg-[#E9E9E9] hover:bg-gray-100 transition"
//       >
//         <Image
//           src="/prev.svg"
//           alt="Previous"
//           width={49}
//           height={33}
//           className="w-[40px] sm:w-[49.5px] h-[27px] sm:h-[33px]"
//         />
//       </button>
//       <button
//         onClick={handleNext}
//         className="w-[60px] sm:w-[74px] h-[60px] sm:h-[74px] flex items-center justify-center border border-[#000000] rounded-[8px] bg-[#E9E9E9] hover:bg-gray-100 transition"
//       >
//         <Image
//           src="/next.svg"
//           alt="Next"
//           width={49}
//           height={33}
//           className="w-[40px] sm:w-[49.5px] h-[27px] sm:h-[33px]"
//         />
//       </button>
//     </div>
//   );
// };

// export default TeamControls;
