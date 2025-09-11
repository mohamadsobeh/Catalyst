"use client";

import { steps } from "@/app/data/approach";
import ApproachHeader from "./Approach/ApproachHeader";
import ApproachStep from "./Approach/ApproachStep";

export default function Approach() {
  return (
    <section className="w-full bg-[#F1F1F1] py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <ApproachHeader />
        {/* Steps */}
        <div className="flex flex-col gap-16 md:gap-[75px]">
          {steps.map((step, index) => (
            <ApproachStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
