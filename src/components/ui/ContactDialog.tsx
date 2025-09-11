"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";

type FormData = {
  name: string;
  email: string;
  industry: string;
  product: string[];
  message: string;
};

export function ContactDialog({ children }: { children: React.ReactNode }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData): Promise<void> => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xovnykza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        reset();
      } else throw new Error();
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        className="
          w-full sm:max-w-[770px] 
          h-full 
          bg-[#E9E9E9] 
          p-4 sm:p-6 md:p-10 
          overflow-y-auto
          rounded-none
        "
      >
        {/* Close Button */}
        <SheetClose className="absolute right-4 top-4 w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] flex items-center justify-center">
          <div className="relative w-full h-full">
            <span className="absolute top-1/2 left-0 w-full h-[3px] sm:h-[4px] bg-black transform -rotate-45 origin-center"></span>
            <span className="absolute top-1/2 left-0 w-full h-[3px] sm:h-[4px] bg-black transform rotate-45 origin-center"></span>
          </div>
        </SheetClose>

        {/* Header */}
        <SheetHeader className="mb-6 sm:mb-8 space-y-2">
          <p className="text-[18px] sm:text-[24px] md:text-[28px] leading-[28px] sm:leading-[32px] font-gilroySemiBold text-[#AAACAC]">
            Contact us
          </p>
          <SheetTitle className="text-[28px] sm:text-[36px] md:text-[48px] leading-[120%] font-gilroyMedium text-black">
            have a project lets <br /> talk about it!
          </SheetTitle>
        </SheetHeader>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-w-[667px] mx-auto flex flex-col gap-6 sm:gap-8">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8">
              {/* Full name */}
              <div className="flex flex-col gap-2 sm:gap-[12px]">
                <label className="text-[16px] sm:text-[20px] font-gilroyMedium text-[#9D9797]">
                  What is your name?
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  {...register("name", { required: "Name is required" })}
                  className="h-[52px] sm:h-[64px] w-full rounded-[16px] border border-[#6D6D6D] 
                             bg-[#E9E9E9] px-4 sm:px-[18px] py-3 sm:py-[20px] 
                             text-[14px] sm:text-[16px] font-gilroyMedium 
                             focus:outline-none focus:ring-0 focus:border-[#6D6D6D]
                             placeholder:text-[#9D9797]"
                />
                {errors.name?.message && (
                  <p className="text-red-500 text-sm">{String(errors.name.message)}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 sm:gap-[12px]">
                <label className="text-[16px] sm:text-[20px] font-gilroyMedium text-[#9D9797]">
                  What is your email?
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="h-[52px] sm:h-[64px] w-full rounded-[16px] border border-[#6D6D6D] 
                             bg-[#E9E9E9] px-4 sm:px-[18px] py-3 sm:py-[20px] 
                             text-[14px] sm:text-[16px] font-gilroyMedium 
                             focus:outline-none focus:ring-0 focus:border-[#6D6D6D]
                             placeholder:text-[#9D9797]"
                />
                {errors.email?.message && (
                  <p className="text-red-500 text-sm">{String(errors.email.message)}</p>
                )}
              </div>
            </div>

            {/* Industry */}
            <div className="flex flex-col gap-2 sm:gap-[14px]">
              <label className="text-[16px] sm:text-[20px] font-gilroyMedium text-[#9D9797]">
                What industry ?
              </label>
              <Controller
                name="industry"
                control={control}
                rules={{ required: "Industry is required" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      className="h-[52px] sm:h-[64px] w-full rounded-[16px] border border-[#6D6D6D] 
                                 bg-[#E9E9E9] px-4 sm:px-[18px] text-[14px] sm:text-[16px] font-gilroyMedium 
                                 text-[#9D9797] focus:outline-none focus:ring-0 focus:border-[#6D6D6D]"
                    >
                      <SelectValue placeholder="industry" />
                    </SelectTrigger>
                    <SelectContent className="rounded-[16px] border border-[#6D6D6D] bg-[#E9E9E9]">
                      <SelectItem value="tech">Tech</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.industry?.message && (
                <p className="text-red-500 text-sm">{String(errors.industry.message)}</p>
              )}
            </div>

            {/* Product Type */}
            <div className="space-y-2">
              <label className="text-[16px] sm:text-[20px] font-gilroyMedium text-[#9D9797]">
                Type of product?
              </label>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {["website", "app", "branding"].map((product) => (
                  <label
                    key={product}
                    className="flex items-center justify-between w-full sm:w-[150px] md:w-[160px] h-[52px] sm:h-[64px] px-4 rounded-[16px] border border-[#6D6D6D] cursor-pointer transition"
                  >
                    <span className="text-[14px] sm:text-[18px] md:text-[20px] font-gilroyMedium text-[#9D9797] capitalize">
                      {product}
                    </span>
                    <input
                      type="checkbox"
                      value={product}
                      {...register("product", {
                        validate: (value) =>
                          value.length > 0 || "Product type is required",
                      })}
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-[#6D6D6D] checked:border-[#C73740] appearance-none 
                               flex items-center justify-center cursor-pointer
                               checked:before:content-[''] checked:before:block checked:before:w-2 sm:checked:before:w-3 checked:before:h-2 sm:checked:before:h-3 
                               checked:before:rounded-full checked:before:bg-[#C73740]"
                    />
                  </label>
                ))}
              </div>
              {errors.product?.message && (
                <p className="text-red-500 text-sm">{String(errors.product.message)}</p>
              )}
            </div>

            {/* Project Description */}
            <div className="space-y-2 w-full">
              <label className="text-[16px] sm:text-[20px] font-gilroyMedium text-[#9D9797]">
                Tell us a bit about your project
              </label>
              <textarea
                placeholder="We are looking forward"
                {...register("message", { required: "Message is required" })}
                className="w-full min-h-[100px] sm:min-h-[120px] md:min-h-[160px] 
                           resize-none rounded-[16px] border border-[#6D6D6D] 
                           bg-[#E9E9E9] px-4 sm:px-[18px] py-3 sm:py-[20px] 
                           text-[16px] sm:text-[20px] font-gilroyMedium text-[#5C5C5C] 
                           placeholder:text-[#9D9797] focus:outline-none transition"
              />
              {errors.message?.message && (
                <p className="text-red-500 text-sm">{String(errors.message.message)}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-4 sm:gap-8 rounded-full border-2 border-[#A02436] 
                         w-full sm:w-[266px] h-[56px] sm:h-[68px] px-6 sm:px-8 py-2 sm:py-3 
                         text-[16px] sm:text-[18px] md:text-[20px] font-gilroyMedium 
                         text-[#A02436] transition hover:bg-[#A02436] hover:text-white"
            >
              <span className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] rounded-full bg-[#A02436]"></span>
              {isSubmitting ? "Sending..." : "send message"}
            </button>

            {/* Status Message */}
            {status && (
              <div
                className={`
                  mt-4 px-4 py-3 rounded-[12px] text-sm font-gilroyMedium shadow-md w-fit
                  transition-opacity duration-500
                  ${
                    status === "success"
                      ? "bg-[#F7D6D4] text-[#A02436] border border-[#A02436]"
                      : "bg-[#FFE5E7] text-[#C73740] border border-[#C73740]"
                  }
                `}
              >
                {status === "success"
                  ? " Message sent successfully!"
                  : " Failed to send. Please try again."}
              </div>
            )}
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
