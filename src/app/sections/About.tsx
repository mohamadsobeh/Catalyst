"use client";

import { useState, useEffect, useRef } from "react";
import { about } from "@/app/data/about";
import AboutHeader from "./About/AboutHeader";
import AboutImage from "./About/AboutImage";
import AboutValue from "./About/AboutValue";

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

    const elements = [...refs.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      elements.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="w-full bg-[#E9E9E9] py-16 sm:py-20 px-4 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        <AboutHeader />
        <AboutImage />

        <div className="flex flex-col gap-0 mt-16">
          {about.map((item, i) => (
            <AboutValue
              key={item.id}
              item={item}
              index={i}
              isActive={active === item.id}
              ref={(el) => {
                if (el) refs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
