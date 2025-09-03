"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { about } from "@/app/data/about";

export default function About() {
  const [active, setActive] = useState("01");
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) setActive(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="w-full bg-[#F1F1F1] py-16 sm:py-20 px-4 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <h2
            className="
              font-gilroySemiBold 
              text-[#AAACAC]
              text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] 
              leading-[100%]
            "
          >
            About us
          </h2>
        </div>
        <p
          className="
            font-ivy
            text-[20px] sm:text-[28px] md:text-[40px] lg:text-[52px] xl:text-[60px]
            leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[56px] xl:leading-[64px]
            tracking-[-0.04em]
            text-[#242221]
            max-w-[1020px]
          "
        >
          Innovation and expertise at the heart of every solution.
        </p>

        <div className="w-full">
          <Image
            src="/about.jpg"
            alt="About us team"
            width={1654}
            height={885}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>

        {/* Values Section */}
        <div className="flex flex-col gap-0 mt-16">
          {about.map((item, i) => {
            const isActive = active === item.id;
            return (
              <div
                key={item.id}
                data-id={item.id}
                ref={(el) => {
                  if (el) refs.current[i] = el;
                }}
                className={`
                  border border-[#C2C2C2] 
                  px-6 sm:px-12 md:px-24 py-12 md:py-20
                  flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20
                  transition-all duration-500
                  ${isActive ? "bg-[#F7D6D4]" : "bg-[#E9E9E9]"}
                  ${i === 0 ? "rounded-t-lg" : ""} 
                  ${i === about.length - 1 ? "rounded-b-lg" : ""} 
                `}
              >
                {/* الرقم */}
                <p
                  className={`
                    text-[96px] sm:text-[140px] md:text-[180px] lg:text-[216px]
                    font-ivy leading-[100%] tracking-[-0.04em] shrink-0
                    ${isActive ? "text-[#DC5758]" : "text-[#C2C2C2]"}
                  `}
                >
                  {item.id}
                </p>

                {/* النصوص */}
                <div className="flex-1 flex flex-col gap-6">
                  <h3
                    className={`
                      text-[32px] sm:text-[40px] md:text-[64px]
                      font-gilroySemiBold uppercase leading-[100%] tracking-[-0.04em]
                      ${isActive ? "text-[#DC5758]" : "text-[#777]"}
                    `}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#242221] font-ivy leading-[150%] max-w-4xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
