"use client";

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
        {/* العنوان */}
        <h1
          className="text-[24px] sm:text-[32px] md:text-[44px] lg:text-[60px] 
                     font-gilroySemiBold text-black 
                     leading-[120%] tracking-tight"
        >
          Catalyst Techs: <br className="hidden sm:block" />
          Powering the Future of Digital Solutions.
        </h1>

        {/* زر CTA مربوط بالديالوغ */}
        <ContactDialog>
          <button
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
          </button>
        </ContactDialog>
      </div>

      {/* Gif يظهر فقط على الديسكتوب في الجهة اليمنى */}
      <div className="hidden lg:block absolute top-1/2 right-24 -translate-y-1/2">
        <Gif />
      </div>
    </section>
  );
}
