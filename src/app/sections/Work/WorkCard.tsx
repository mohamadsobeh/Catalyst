"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { WorkItem } from "@/app/data/work";

interface WorkCardProps {
  item: WorkItem;
}

export default function WorkCard({ item }: WorkCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md group relative transition-all duration-500 ease-in-out hover:scale-[1.02]">
      <CardContent className="p-0 relative">
        <Image
          src={item.image}
          alt={item.title}
          width={842}
          height={432}
          className="w-full h-[200px] sm:h-[340px] md:h-[432px] object-cover transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </CardContent>

      <CardFooter className="flex flex-col items-start p-4 relative">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-base text-gray-900 font-gilroy font-bold">
            {item.title}
          </h3>

          <div className="relative flex items-center">
            <span
              className={`text-sm font-gilroy font-medium ${
                item.categoryColor ?? "text-gray-500"
              } transition-all duration-500 ease-in-out group-hover:opacity-0`}
            >
              ({item.category})
            </span>

            <div className="absolute right-0 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <div className="flex items-center">
                <div className="w-[50px] h-[2px] bg-[#DC5758]"></div>
                <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent border-l-[#DC5758]"></div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-600 font-ivy">
          {item.description}
        </p>
      </CardFooter>
    </Card>
  );
}
