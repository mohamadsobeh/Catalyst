// "use client";

// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// export default function Packages() {
//   return (
//     <section className="relative w-full bg-[#1E1C1B] text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
//       <div className="relative max-w-screen-xl mx-auto">
//         {/* Header */}
//         <div className="flex items-start justify-between mb-12 relative">
//           <div>
//             <h2 className="text-[28px] sm:text-[36px] md:text-[45px] font-gilroySemiBold text-[#545454]">
//               Our packages
//             </h2>
//             <p className="mt-4 text-[20px] sm:text-[26px] md:text-[32px] leading-snug max-w-2xl font-ivy font-normal">
//               preview your ad, hit Publish, and watch it go live in seconds. You
//               can even save drafts or boost visibility to reach more buyers.
//             </p>
//           </div>
//         </div>

//         {/* Tabs */}
//         <Tabs defaultValue="starter" className="w-full">
//           <Card className="w-full bg-white bg-[url('/pattern.png')] bg-repeat border border-gray-200 rounded-[22px] p-0 flex flex-col gap-0 overflow-hidden">
            
//             {/* Tabs List */}
//             <TabsList className="flex w-full mb-8 bg-transparent border-none">
//               <TabsTrigger value="custom" className="clip-left font-gilroySemiBold">
//                 custom pack
//               </TabsTrigger>
//               <TabsTrigger value="business" className="clip-middle font-gilroy">
//                 business pack
//               </TabsTrigger>
//               <TabsTrigger value="starter" className="clip-right font-gilroy">
//                 starter pack
//               </TabsTrigger>
//             </TabsList>

//             {/* Custom Pack Content */}
//             <TabsContent value="custom" className="p-10 flex flex-col md:flex-row gap-10">
//               <div className="flex-1 flex items-center justify-center">
//                 <Image src="/packges.svg" alt="Custom Package" width={350} height={350} className="object-contain" />
//               </div>
//               <CardContent className="flex-1 p-0">
//                 <h3 className="text-[22px] font-gilroySemiBold text-[#C73740] mb-4">custom pack</h3>
//                 <p className="text-[#B0B0B0] text-[14px] font-ivy mb-6">
//                   Tailored solutions designed for your unique business needs.
//                 </p>
//                 <h4 className="text-black uppercase mb-4 font-gilroySemiBold text-[14px]">DETAILS</h4>
//                 <ul className="space-y-3 text-[14px] text-black">
//                   <li>✔ Fully Customized Website</li>
//                   <li>✔ Advanced Features & Integrations</li>
//                   <li>✔ Premium Analytics & Reporting</li>
//                   <li>✔ 3-Month Technical Support</li>
//                 </ul>
//                 <div className="mt-6 flex items-center gap-8 text-sm font-gilroy">
//                   <p><span className="text-[#C73740] font-semibold">$ Price</span> 500$</p>
//                   <p><span className="text-[#C73740] font-semibold">⏱ Timeline</span> 12 weeks</p>
//                 </div>
//                 <button className="mt-6 text-sm font-gilroySemiBold text-black border-b-2 border-[#C73740] hover:text-[#C73740]">
//                   LET’S DISCUSS YOUR PROJECT
//                 </button>
//               </CardContent>
//             </TabsContent>

//             {/* Business Pack Content */}
//             <TabsContent value="business" className="p-10 flex flex-col md:flex-row gap-10">
//               <div className="flex-1 flex items-center justify-center">
//                 <Image src="/packges.svg" alt="Business Package" width={350} height={350} className="object-contain" />
//               </div>
//               <CardContent className="flex-1 p-0">
//                 <h3 className="text-[22px] font-gilroySemiBold text-[#C73740] mb-4">business pack</h3>
//                 <p className="text-[#B0B0B0] text-[14px] font-ivy mb-6">
//                   Professional package ideal for startups and growing businesses.
//                 </p>
//                 <h4 className="text-black uppercase mb-4 font-gilroySemiBold text-[14px]">DETAILS</h4>
//                 <ul className="space-y-3 text-[14px] text-black">
//                   <li>✔ Multi-page Website Development</li>
//                   <li>✔ Responsive Design (Mobile & Desktop)</li>
//                   <li>✔ Google Analytics & SEO Setup</li>
//                   <li>✔ 2-Month Technical Support</li>
//                 </ul>
//                 <div className="mt-6 flex items-center gap-8 text-sm font-gilroy">
//                   <p><span className="text-[#C73740] font-semibold">$ Price</span> 350$</p>
//                   <p><span className="text-[#C73740] font-semibold">⏱ Timeline</span> 8 weeks</p>
//                 </div>
//                 <button className="mt-6 text-sm font-gilroySemiBold text-black border-b-2 border-[#C73740] hover:text-[#C73740]">
//                   LET’S DISCUSS YOUR PROJECT
//                 </button>
//               </CardContent>
//             </TabsContent>

//             {/* Starter Pack Content */}
//             <TabsContent value="starter" className="p-10 flex flex-col md:flex-row gap-10">
//               <div className="flex-1 flex items-center justify-center">
//                 <Image src="/packges.svg" alt="Starter Package" width={350} height={350} className="object-contain" />
//               </div>
//               <CardContent className="flex-1 p-0">
//                 <h3 className="text-[22px] font-gilroySemiBold text-[#C73740] mb-4">starter pack</h3>
//                 <p className="text-[#B0B0B0] text-[14px] font-ivy mb-6">
//                   preview your ad, hit Publish, and watch it go live in seconds.
//                   You can even save drafts or boost visibility to reach more buyers.
//                 </p>
//                 <h4 className="text-black uppercase mb-4 font-gilroySemiBold text-[14px]">DETAILS</h4>
//                 <ul className="space-y-3 text-[14px] text-black">
//                   <li>✔ Simple Website Development (Landing Page or Portfolio)</li>
//                   <li>✔ Responsive Design (Mobile & Desktop)</li>
//                   <li>✔ Basic Google Analytics Integration</li>
//                   <li>✔ 1-Month Technical Support</li>
//                 </ul>
//                 <div className="mt-6 flex items-center gap-8 text-sm font-gilroy">
//                   <p><span className="text-[#C73740] font-semibold">$ Price</span> 200$</p>
//                   <p><span className="text-[#C73740] font-semibold">⏱ Timeline</span> 6 weeks</p>
//                 </div>
//                 <button className="mt-6 text-sm font-gilroySemiBold text-black border-b-2 border-[#C73740] hover:text-[#C73740]">
//                   LET’S DISCUSS YOUR PROJECT
//                 </button>
//               </CardContent>
//             </TabsContent>
//           </Card>
//         </Tabs>
//       </div>
//     </section>
//   );
// }
