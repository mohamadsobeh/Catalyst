"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { workItems, WorkItem } from "@/app/data/work";

export default function Work() {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? workItems : workItems.slice(0, 4);

  return (
    <section
      id="work"
      className="w-full bg-white py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[45px] font-gilroy text-[#545454]">
              Our Work
            </h2>

            <p className="mt-6 text-[22px] sm:text-[30px] md:text-[54px] leading-[1] tracking-[-0.01em] text-[#AAACAC] max-w-4xl font-normal">
              Preview your ad, hit Publish, and watch it go live in seconds. You
              can even save drafts or boost visibility to reach more buyers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <AnimatePresence>
            {visibleItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="overflow-hidden border-none shadow-md group relative transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-0 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-[360px] sm:h-[400px] md:h-[432px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                  </CardContent>

                  <CardFooter className="flex flex-col items-start p-4 relative">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-base font-semibold text-gray-900">
                        {item.title}
                      </h3>

                      <div className="relative flex items-center">
                        <span
                          className={`text-sm font-medium ${item.categoryColor} transition-all duration-500 ease-in-out group-hover:opacity-0`}
                        >
                          ({item.category})
                        </span>

                        <div className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                          <div className="flex items-center">
                            <div className="w-[50px] h-[2px] bg-[#DC5758]"></div>
                            <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent border-l-[#DC5758]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => setShowAll(true)}
              className="bg-[#DC5758] text-white px-8 py-4 rounded-full hover:bg-[#C73740] transition-all duration-300"
            >
              Show more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
