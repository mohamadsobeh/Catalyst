// "use client";

// import { useState } from "react";
// import TeamHeader from "./TeamHeader";
// import TeamCarousel from "./TeamCarousel";
// import TeamGrid from "./TeamGrid";
// import TeamControls from "./TeamControls";

// export default function Team() {
//   const [activeIndex, setActiveIndex] = useState(1);

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + 4) % 4); // team.length = 4
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % 4);
//   };

//   return (
//     <section className="w-full bg-[#E9E9E9] py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
//       <TeamHeader />
//       <TeamCarousel
//         activeIndex={activeIndex}
//         handlePrev={handlePrev}
//         handleNext={handleNext}
//       />
//       <TeamGrid activeIndex={activeIndex} />
//       <TeamControls handlePrev={handlePrev} handleNext={handleNext} />
//     </section>
//   );
// }
