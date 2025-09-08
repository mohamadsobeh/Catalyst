"use client";

import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { ContactDialog } from "@/components/ui/ContactDialog";

export default function Footer() {
  return (
    <footer className="relative text-white px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20">
      {/* خلفية */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-footer-pattern bg-repeat backdrop-blur"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* نص */}
          <div>
            <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-gilroyMedium leading-[1.4] text-white">
              Your next success starts here <br /> let’s build it together.
            </h2>
            <p className="mt-6 text-[20px] sm:text-[24px] md:text-[28px] font-gilroySemiBold text-black tracking-tight">
              Support@catalysttechs.com
            </p>
          </div>

          {/* زر Contact داخل Dialog */}
          <div className="flex md:justify-end">
            <ContactDialog>
              <button
                className="inline-flex items-center gap-4 rounded-full border border-white px-8 py-3 
                           text-sm sm:text-base font-medium text-white transition"
              >
                <span className="w-4 h-4 rounded-full bg-white"></span>
                Contact us
              </button>
            </ContactDialog>
          </div>
        </div>

        <div className="my-10 border-t border-white/15"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/footer.svg" alt="Catalyst Logo" width={52} height={49} />
            <span className="text-[36px] font-medium text-white leading-none">
              Catalyst
            </span>
          </div>

          {/* Contacts */}
          <div className="flex flex-col md:justify-self-end md:text-start">
            <h3 className="text-base sm:text-lg font-gilroyMedium mb-3 text-[#D3D3D3]">
              Contacts
            </h3>
            <p className="text-sm font-gilroyMedium text-white mb-2">
              (+963) 964603911
            </p>
            <a
              href="mailto:Support@Catalysttechs.com"
              className="text-sm font-gilroyMedium text-white hover:underline break-words"
            >
              Support@Catalysttechs.com
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col md:justify-self-end md:text-right">
            <h3 className="text-base sm:text-lg font-gilroyMedium mb-3 text-[#D3D3D3]">
              Social Media
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/90">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white justify-start"
                >
                  <Twitter size={16} /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/catalyst-techs/"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white justify-start"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white justify-start"
                >
                  <Facebook size={16} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/catalyst_techs"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-white justify-start"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 font-gilroyMedium text-xs text-center sm:text-left text-white/70">
          © {new Date().getFullYear()} Catalyst Technologies — Building Tomorrow’s Software Today.
        </div>
      </div>
    </footer>
  );
}
