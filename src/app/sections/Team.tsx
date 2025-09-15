"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { team } from "../data/team";
import { cn } from "@/lib/utils";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // ✅ النوع الصحيح
import "swiper/css";

export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null); // ✅ بدون any

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="w-full bg-[#E9E9E9] py-20 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="container mx-auto px-4 text-left mb-12">
        {/* العنوان */}
        <h2
          className="
            text-[32px] sm:text-[64px] md:text-[92px] lg:text-[124px]
            font-gilroySemiBold text-[#DC5758] uppercase
            leading-[100%] tracking-[-0.04em] mb-10
          "
        >
          OUR TEAM
        </h2>

        <p
          className="
            text-[18px] sm:text-[28px] md:text-[40px] lg:text-[60px]
            font-ivy font-sans text-[#242221]
            leading-[100%] tracking-[-0.04em]
            max-w-[1503px] mb-28
          "
        >
          OUR TEAM BRINGS TOGETHER EXPERTISE, CREATIVITY, AND A SHARED
          DEDICATION TO QUALITY IN EVERY STAGE OF DESIGN.
        </p>

        {/* Swiper الكروت */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1} // موبايل
          centeredSlides={true} // يخلي الكارت النشط بالوسط
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: false }, // تابلت
            1024: { slidesPerView: 3, centeredSlides: true }, // ديسكتوب
            1440: { slidesPerView: 4, centeredSlides: true }, // شاشات كبيرة
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="!overflow-visible"
        >
          {team.slice(0, 7).map((member, index) => (
            <SwiperSlide key={member.id}>
              <div
                className={cn(
                  "relative rounded-[18px] overflow-hidden shadow-md flex flex-col justify-end transition-all duration-300",
                  index === 0
                    ? "bg-[#1C1C1C] text-white"
                    : "bg-black text-white",
                  index === activeIndex
                    ? "scale-105 shadow-2xl"
                    : "opacity-80 grayscale"
                )}
                style={
                  index === activeIndex
                    ? {
                        borderImage:
                          "linear-gradient(180deg, #DC5758, #762F2F) 1",
                      }
                    : {}
                }
              >
                {/* الصورة */}
                {index === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[380px]">
                    <Image
                      src="/team.svg"
                      alt="Placeholder"
                      width={250}
                      height={320}
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[380px]">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={250}
                      height={320}
                      
                      className="object-cover rounded-t-[18px]"
                    />
                  </div>
                )}

                {/* القسم السفلي */}
                <div
                  className={cn(
                    "w-full flex items-center justify-between px-6 py-3 rounded-b-[18px]",
                    index === activeIndex
                      ? "bg-gradient-to-r from-[#DC5758] to-[#762F2F]"
                      : "bg-black"
                  )}
                >
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="font-gilroyMedium text-[20px] tracking-[-0.04em] uppercase text-white">
                      {member.name}
                    </h3>
                    <p className="font-Ivy-Regular text-[13.68px] tracking-[-0.04em] text-white">
                      {member.role}
                    </p>
                  </div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center w-[38px] h-[38px] rounded-full",
                      index === activeIndex ? "bg-[#E9E9E9]" : "bg-[#D9D9D9]"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#C73740"
                      viewBox="0 0 24 24"
                      className="w-[20px] h-[20px]"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V7.98h-4V24zM8.48 7.98h3.83v2.18h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.06V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.57 0-2.96 2-2.96 4.07V24h-4V7.98z" />
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* أزرار التحكم الخاصة فيك */}
        <div className="flex justify-center gap-6 mt-20">
          <button
            onClick={handlePrev}
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
            onClick={handleNext}
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
