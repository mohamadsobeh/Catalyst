"use client";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/app/data/services";

export default function Services() {
  return (
    <section className="w-full bg-[#1E1C1B] text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[45px] font-gilroySemiBold text-[#545454]">
              Our services
            </h2>
            <p className="mt-4 text-[20px] sm:text-[26px] md:text-[32px] leading-snug max-w-2xl font-ivy font-normal">
              preview your ad, hit Publish, and watch it go live in seconds. You
              can even save drafts or boost visibility to reach more buyers.
            </p>
          </div>
        </div>

        <div className="border-t border-[#5B5958] mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-transparent border border-gray-600 rounded-2xl text-left"
            >
              <CardContent className="p-6">
                <p className="text-sm text-gray-400 mb-6 mt-2">
                  ({service.id})
                </p>
                <h3 className="font-gilroySemiBold text-3xl leading-[100%] tracking-[-0.04em] text-[#C73740] uppercase mb-10">
                  {service.title}
                </h3>

                <p className="text-[#919190] text-md leading-relaxed mb-10 font-ivy">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
