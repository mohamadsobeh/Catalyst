"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { label: "Work", to: "work" },
  { label: "Services", to: "services" },
  { label: "Packages", to: "packages" },
  { label: "Approach", to: "approach" },
  { label: "About", to: "about" },
];

export default function Header() {
  const [active, setActive] = useState("");

  return (
    <header className="sticky top-8 z-50 w-full bg-catalyst-bg bg-pattern bg-repeat backdrop-blur">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          offset={-80}
          className="flex items-center gap-[6px] cursor-pointer"
        >
          <Image
            src="/logo.svg"
            alt="Catalyst Logo"
            width={52}
            height={48}
            priority
          />
          <span className="text-[28px] md:text-[36px] leading-[44px] font-medium text-black">
            Catalyst
          </span>
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex h-[60px] lg:h-[67px] items-center gap-2 rounded-full bg-white px-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.to}>
                  <NavigationMenuLink asChild>
                    <ScrollLink
                      to={item.to}
                      smooth
                      duration={500}
                      offset={-80}
                      onClick={() => setActive(item.to)}
                      className={cn(
                        "rounded-full px-5 py-2 text-base font-gilroySemiBold text-black transition-colors cursor-pointer",
                        "hover:bg-catalyst-hover hover:text-white",
                        active === item.to && "bg-catalyst-hover text-white"
                      )}
                    >
                      {item.label}
                    </ScrollLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <ScrollLink
                    to="contact"
                    smooth
                    duration={500}
                    offset={-80}
                    className="rounded-full bg-catalyst-contact px-6 py-2 text-base font-medium text-black cursor-pointer"
                  >
                    Contact
                  </ScrollLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-catalyst-hover text-2xl"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            {/* side right*/}
            <SheetContent side="right" className="bg-white text-black w-64">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              <div className="flex flex-col gap-4 mt-10 px-4 text-base font-medium">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <ScrollLink
                      to={item.to}
                      smooth
                      duration={500}
                      offset={-80}
                      onClick={() => setActive(item.to)}
                      className={cn(
                        "cursor-pointer transition-colors",
                        "hover:text-catalyst-hover",
                        active === item.to && "text-catalyst-hover"
                      )}
                    >
                      {item.label}
                    </ScrollLink>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <ScrollLink
                    to="contact"
                    smooth
                    duration={500}
                    offset={-80}
                    className="rounded-full bg-catalyst-contact px-4 py-2 text-base font-medium text-black mt-2 text-center cursor-pointer"
                  >
                    Contact
                  </ScrollLink>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}