"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { team } from "../data/team";

export default function Team() {
  const [start, setStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setStart((prev) => (prev + 1) % team.length);
  const prev = () => setStart((prev) => (prev - 1 + team.length) % team.length);

  const visible = isMobile
    ? [team[start]]
    : [
        team[start],
        team[(start + 1) % team.length],
        team[(start + 2) % team.length],
        team[(start + 3) % team.length],
      ];

  return (
    <section className="w-full bg-[#F3F3F3] py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="">
        {/* العنوان والنص */}
        <div className=" text-left max-w-[1503px]">
          <h2
            className="
              text-[32px] sm:text-[64px] md:text-[92px] lg:text-[124px]
              font-gilroySemiBold text-[#DC5758] uppercase leading-[100%] tracking-[-0.04em] mb-10
            "
          >
            OUR TEAM
          </h2>
          <p
            className="
              text-[18px] sm:text-[28px] md:text-[40px] lg:text-[52px]
              Ivy-Regular text-[#242221] leading-[100%] tracking-[-0.04em] max-w-[1503px]
            "
          >
            OUR TEAM BRINGS TOGETHER EXPERTISE, CREATIVITY, AND A SHARED
            DEDICATION TO QUALITY IN EVERY STAGE OF DESIGN.
          </p>
        </div>

        {/* الكروت */}
        <div className="flex gap-6 justify-center flex-nowrap">
          {visible.map((member, idx) => {
            const isActive = !isMobile && idx === 1; // الكارد الثاني نشط على الديسكتوب
            return (
              <div
                key={member.id}
                className={`
                  transition-all duration-500 ease-in-out flex-shrink-0 overflow-hidden
                  ${isActive
                    ? "w-[260px] sm:w-[320px] md:w-[360px] lg:w-[380px] h-[380px] sm:h-[480px] md:h-[540px] lg:h-[607px] border border-[#DC5758] rounded-[18px] shadow-lg"
                    : "w-[200px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[519px] rounded-[15px] shadow-md"
                  }
                `}
              >
                {/* صورة */}
                <div className="relative w-full h-[80%]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow hover:scale-105 transition"
                  >
                    in
                  </a>
                </div>

                {/* النص */}
                <div className="p-4 text-center bg-[#1E1C1B] text-white h-[20%] flex flex-col justify-center">
                  <h3 className="text-sm sm:text-base md:text-lg font-gilroySemiBold">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-80">{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* أزرار التحكم */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-[60px] sm:w-[74px] h-[60px] sm:h-[74px] flex items-center justify-center border border-[#000000] rounded-[8px] bg-white hover:bg-gray-100 transition"
          >
            <Image
              src="/prev.svg"
              alt="Previous"
              width={49}
              height={33}
              className="w-[40px] sm:w-[49.5px] h-[27px] sm:h-[33px]"
            />
          </button>
          <button
            onClick={next}
            className="w-[60px] sm:w-[74px] h-[60px] sm:h-[74px] flex items-center justify-center border border-[#000000] rounded-[8px] bg-white hover:bg-gray-100 transition"
          >
            <Image
              src="/next.svg"
              alt="Next"
              width={49}
              height={33}
              className="w-[40px] sm:w-[49.5px] h-[27px] sm:h-[33px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
