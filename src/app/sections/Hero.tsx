"use client";

import { motion } from "framer-motion";
import { ContactDialog } from "@/components/ui/ContactDialog";
import Gif from "./gif";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] 
                 flex-col items-start justify-center 
                 px-4 sm:px-8 md:px-16 lg:px-24 
                 py-10 sm:py-16 md:py-20 
                 bg-catalyst-bg bg-pattern bg-repeat
                 overflow-hidden"
    >
      <div className="max-w-[1191px] w-full">
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="text-[24px] sm:text-[32px] md:text-[44px] lg:text-[60px] 
                     font-gilroySemiBold text-black 
                     leading-[120%] tracking-tight"
        >
          Catalyst Techs: <br className="hidden sm:block" />
          Powering the Future of Digital Solutions.
        </motion.h1>

        <ContactDialog>
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4, 
              ease: [0.25, 0.8, 0.25, 1],
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 sm:mt-8 inline-flex
                       h-[50px] sm:h-[60px] md:h-[75px] lg:h-[90px]
                       w-[200px] sm:w-[250px] md:w-[320px] lg:w-[376px]
                       items-center justify-center
                       rounded-full 
                       bg-[#DC5758] 
                       text-sm sm:text-lg md:text-xl lg:text-[24px] 
                       font-gilroySemiBold text-white 
                       transition-colors hover:bg-[#C73740]"
          >
            Contact Us
          </motion.button>
        </ContactDialog>
      </div>

      <div className="hidden lg:block absolute top-1/2 right-24 -translate-y-1/2">
        <Gif />
      </div>
    </section>
  );
}
