"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#A12436] text-white px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-pattern opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-normal leading-[1.4] text-white">
              Your next success takes one <br /> hello
            </h2>
            <p className="mt-6 text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-black tracking-tight">
              Support@catalysttechs.com
            </p>
          </div>

          <div className="flex md:justify-end">
            <Link
              href="#contact"
              className="inline-flex items-center gap-4 rounded-full border border-white px-8 py-3 
                         text-sm sm:text-base font-medium text-white 
                        transition"
            >
              <span className="w-4 h-4 rounded-full bg-white"></span>
              Contact us
            </Link>
          </div>
        </div>

        <div className="my-10 border-t border-white/15"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-2">
            <Image
              src="/footer.svg"
              alt="Catalyst Logo"
              width={52}
              height={49}
            />
            <span className="text-[36px] font-medium text-white leading-none">
              Catalyst
            </span>
          </div>

          <div className="flex flex-col  md:justify-self-end md:text-start">
            <h3 className="text-base sm:text-lg font-gilroy mb-3 text-[#D3D3D3]">
              Contacts
            </h3>
            <p className="text-sm font-gilroy text-white mb-2">
              (+963) 964603911
            </p>
            <Link
              href="mailto:Support@Catalysttechs.com"
              className="text-sm font-gilroy text-white hover:underline break-words"
            >
              Support@Catalysttechs.com
            </Link>
          </div>

          <div className="flex flex-col md:justify-self-end md:text-right">
            <h3 className="text-base sm:text-lg font-gilroy mb-3 text-[#D3D3D3]">
              Social Media
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/90">
              <li>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white justify-start"
                >
                  <Twitter size={16} /> Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white justify-start"
                >
                  <Linkedin size={16} /> LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white justify-start"
                >
                  <Facebook size={16} /> Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white justify-start"
                >
                  <Instagram size={16} /> Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-xs text-center sm:text-left text-white/70">
          © {new Date().getFullYear()} Catalyst Technologies - All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
