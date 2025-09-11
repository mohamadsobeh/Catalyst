"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, staggerParent } from "./animations";

interface Step {
  id: string;
  title: string;
  desc: string;
  image: string;
  bg: string;
}

interface ApproachStepProps {
  step: Step;
  index: number;
}

export default function ApproachStep({ step, index }: ApproachStepProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={staggerParent}
    >
      <Card
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
          <motion.div variants={fadeUp(0.05)} className="flex flex-col gap-2">
            <p
              className={`text-[16px] sm:text-[18px] md:text-[20px] font-ivy font-semibold tracking-[-0.04em] ${
                index === 0 ? "text-[#6E6C6C]" : "text-white"
              }`}
            >
              ( {step.id} )
            </p>

            <h3
              className={`${
                index === 0
                  ? "text-[40px] sm:text-[52px] md:text-[64px] leading-[100%] font-gilroySemiBold uppercase"
                  : "text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-[100%] font-gilroySemiBold uppercase"
              }`}
            >
              {step.title}
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp(0.2)}
            className={`mt-6 sm:mt-8 ${
              index === 0
                ? "text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[120%] font-ivy text-[#919190] max-w-xl"
                : "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[150%] font-ivy text-white opacity-90 max-w-2xl"
            }`}
          >
            {step.desc}
          </motion.p>
        </CardContent>

        {/* Image */}
        <motion.div
          variants={index % 2 === 0 ? slideRight(0.25) : slideLeft(0.25)}
          className="flex-shrink-0 w-[240px] h-[220px] sm:w-[320px] sm:h-[280px] md:w-[400px] md:h-[340px] lg:w-[470px] lg:h-[400px]"
        >
          <Image
            src={step.image}
            alt={step.title}
            width={470}
            height={400}
            className="object-contain w-full h-full"
          />
        </motion.div>
      </Card>
    </motion.div>
  );
}
