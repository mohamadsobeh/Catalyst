"use client";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/app/data/services";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Services() {
  return (
    <section className="w-full bg-[#1E1C1B] text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-[1280px] mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-start justify-between mb-12"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[28px] sm:text-[36px] md:text-[45px] font-gilroySemiBold text-[#E4E4E4]"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="mt-4 text-[20px] sm:text-[26px] md:text-[32px] leading-snug max-w-2xl font-ivy font-normal text-[#B5B5B5]"
            >
              What we offer to enhance and customize your digital experience.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-t border-[#5B5958] mb-12 origin-left"
        ></motion.div>

        {/* card*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
            >
              <Card className="bg-transparent border border-gray-600 rounded-2xl text-left hover:border-[#DC5758] hover:shadow-lg transition-all duration-300 h-full md:min-h-[420px] flex">
                <CardContent className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-6 mt-2">
                      ({service.id})
                    </p>
                    <h3 className="font-gilroySemiBold text-3xl leading-[100%] tracking-[-0.04em] text-[#C73740] uppercase mb-10">
                      {service.title}
                    </h3>

                    <p className="text-[#919190] text-md leading-relaxed font-ivy">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
