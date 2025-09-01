"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] 
                 flex-col items-start justify-center 
                 px-4 sm:px-8 md:px-16 lg:px-24 
                 py-10 sm:py-16 md:py-20 
                 bg-catalyst-bg bg-pattern"
    >
      <div className="max-w-[1191px] w-full">
        <h1
          className="text-[24px] sm:text-[32px] md:text-[44px] lg:text-[64px] 
                     font-semibold text-black leading-[120%] tracking-tight"
        >
          tech solutions tailored for <br className="hidden sm:block" />
          your brand’s success.
        </h1>

        <Link
          href="#contact"
          className="mt-6 sm:mt-8 inline-flex
                     h-[50px] sm:h-[60px] md:h-[75px] lg:h-[90px]
                     w-[200px] sm:w-[250px] md:w-[320px] lg:w-[376px]
                     items-center justify-center rounded-full 
                     bg-[#DC5758] text-sm sm:text-lg md:text-xl lg:text-[24px] 
                     font-semibold text-white transition-colors hover:bg-[#C73740]"
        >
          Have A Project In Mind
        </Link>
      </div>
    </section>
  );
}
