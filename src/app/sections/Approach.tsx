"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { steps } from "@/app/data/approach";

export default function Approach() {
  return (
    <section className="w-full bg-[#F1F1F1] py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 relative">
          <h2
            className="
              font-gilroySemiBold 
              text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] 
              leading-[100%] 
              text-[#AAACAC]
            "
          >
            Our Approach
          </h2>

          <p
            className="
              mt-6
              text-[18px] leading-[26px]
              sm:text-[24px] sm:leading-[32px]
              md:text-[36px] md:leading-[44px]
              lg:text-[48px] lg:leading-[56px]
              xl:text-[60px] xl:leading-[64px]
              tracking-[-0.02em] xl:tracking-[-0.04em]
              text-[#242221] max-w-[1020px]
              font-ivy
            "
          >
            How we work to deliver results that last.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-16 md:gap-[75px]">
          {steps.map((step, index) => (
            <Card
              key={step.id}
              className={`
                rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] 
                p-6 sm:p-8 md:pt-[45px] md:pb-[45px] md:px-[30px]
                flex flex-col md:flex-row 
                items-center justify-between 
                gap-8 md:gap-10
                ${step.bg} 
                ${index === 0 ? "min-h-[480px] md:min-h-[530px]" : "min-h-[420px] md:min-h-[540px]"}
              `}
            >
              {/* Text */}
              <CardContent className="p-0 flex-1 flex flex-col justify-center">
                {/* ID + Title */}
                <div className="flex flex-col gap-2">
                  <p
                    className={`
                      text-[16px] sm:text-[18px] md:text-[20px] 
                      font-ivy font-semibold tracking-[-0.04em]
                      ${index === 0 ? "text-[#6E6C6C]" : "text-white"}
                    `}
                  >
                    ( {step.id} )
                  </p>

                  <h3
                    className={`
                      ${index === 0 
                        ? "text-[40px] sm:text-[52px] md:text-[64px] leading-[100%] font-gilroySemiBold uppercase" 
                        : "text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-[100%] font-gilroySemiBold uppercase"}
                    `}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className={`
                    mt-6 sm:mt-8
                    ${index === 0 
                      ? "text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[120%] font-ivy text-[#919190] max-w-xl" 
                      : "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[150%] font-ivy text-white opacity-90 max-w-2xl"}
                  `}
                >
                  {step.desc}
                </p>
              </CardContent>

              {/* Image */}
              <div
                className="
                  flex-shrink-0 
                  w-[240px] h-[220px]
                  sm:w-[320px] sm:h-[280px] 
                  md:w-[400px] md:h-[340px] 
                  lg:w-[470px] lg:h-[400px]
                "
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={470}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
