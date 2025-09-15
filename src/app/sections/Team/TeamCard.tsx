// "use client";

// import Image from "next/image";
// import { cn } from "@/lib/utils";

// interface TeamCardProps {
//   id: number;
//   name: string;
//   role: string;
//   img: string;
//   linkedin: string;
//   index: number;
//   isActive: boolean;
// }

// const TeamCard: React.FC<TeamCardProps> = ({
//   name,
//   role,
//   img,
//   linkedin,
//   index,
//   isActive,
// }) => {
//   return (
//     <div
//       className={cn(
//         "relative rounded-[18px] overflow-hidden flex flex-col justify-end transition-all duration-300",
//         index === 0 ? "bg-[#1C1C1C] text-white" : "bg-black text-white",
//         isActive ? "scale-105 shadow-2xl" : "shadow-md opacity-80 grayscale"
//       )}
//       style={
//         isActive
//           ? { borderImage: "linear-gradient(180deg, #DC5758, #762F2F) 1" }
//           : {}
//       }
//     >
//       {/* image*/}
//       {index === 0 ? (
//         <div className="flex flex-col items-center justify-center h-[380px]">
//           <Image
//             src="/team.svg"
//             alt="Placeholder"
//             width={250}
//             height={320}
//             className="object-cover"
//           />
//         </div>
//       ) : (
//         <div className="w-full h-[380px] relative">
//           <Image
//             src={img}
//             alt={name}
//             fill
//             className="object-cover rounded-t-[18px]"
//           />
//         </div>
//       )}

//       {/* sec down*/}
//       <div
//         className={cn(
//           "w-full flex items-center justify-between px-6 py-3 rounded-b-[18px]",
//           isActive ? "bg-gradient-to-r from-[#DC5758] to-[#762F2F]" : "bg-black"
//         )}
//       >
//         <div className="flex flex-col gap-[6px]">
//           <h3 className="font-gilroyMedium text-[23.94px] uppercase text-white">
//             {name}
//           </h3>
//           <p className="font-Ivy-Regular text-[13.68px] text-white">{role}</p>
//         </div>

//         <a
//           href={linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={cn(
//             "flex items-center justify-center w-[38px] h-[38px] rounded-full",
//             isActive ? "bg-[#E9E9E9]" : "bg-[#D9D9D9]"
//           )}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#C73740"
//             viewBox="0 0 24 24"
//             className="w-[20px] h-[20px]"
//           >
//             <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V7.98h-4V24zM8.48 7.98h3.83v2.18h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.06V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.57 0-2.96 2-2.96 4.07V24h-4V7.98z" />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default TeamCard;
