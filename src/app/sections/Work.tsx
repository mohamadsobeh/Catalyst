"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

import { workItems } from "@/app/data/work";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Work() {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? workItems : workItems.slice(0, 4);

  return (
    <section
      id="work"
      className="w-full bg-white py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex items-start justify-between mb-12"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[28px] sm:text-[36px] md:text-[45px] font-gilroySemiBold text-[#545454]"
            >
              Our Work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="mt-6 
               text-[22px] sm:text-[30px] md:text-[60px] 
               leading-[100%] tracking-[-0.04em] 
               text-[#AAACAC] max-w-4xl 
               font-ivy"
            >
              Explore our flagship products built to empower businesses and
              modernize industries.
            </motion.p>
          </div>
        </motion.div>

        {/* card*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {visibleItems.map((item, i) => (
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
              <Card className="overflow-hidden border-none shadow-md group relative transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
                <CardContent className="p-0 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-[360px] sm:h-[400px] md:h-[432px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                </CardContent>

                <CardFooter className="flex flex-col items-start p-4 relative">
                  <div className="flex items-center justify-between w-full">
                    
                    <h3 className="text-base text-gray-900 font-gilroy font-bold">
                      {item.title}
                    </h3>

                    
                    <div className="relative flex items-center">
                      <span
                        className={`text-sm font-gilroy font-medium ${item.categoryColor} transition-all duration-500 ease-in-out group-hover:opacity-0`}
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

                  <p className="mt-2 text-sm text-gray-600 font-ivy">
                    {item.description}
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-10"
          >
            <Button
              onClick={() => setShowAll(true)}
              className="bg-[#DC5758] text-white px-8 py-4 rounded-full font-gilroySemiBold hover:bg-[#C73740] transition-all duration-300 hover:scale-105"
            >
              Show more
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
