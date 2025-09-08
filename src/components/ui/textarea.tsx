import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full min-h-[120px] sm:min-h-[160px] rounded-[16px] border border-[#6D6D6D] " +
        "bg-[#E9E9E9] px-[18px] py-[20px] text-[20px] font-gilroyMedium text-[#5C5C5C] " +
        "placeholder:text-[#9D9797] focus:outline-none transition",
        className
      )}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
