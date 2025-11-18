"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  textarea?: boolean; // NEW PROP
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(({ className, type, textarea = false, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
            radial-gradient(
              ${
                visible ? radius + "px" : "0px"
              } circle at ${mouseX}px ${mouseY}px,
              #000,
              transparent 80%
            )
          `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-lg p-[2px] transition duration-300"
    >
      {textarea ? (
        <textarea
          className={cn(
            `shadow-input flex w-full rounded-md bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 
              group-hover/input:shadow-none placeholder:text-neutral-400 
              focus-visible:ring-[2px] focus-visible:ring-black focus-visible:outline-none 
              disabled:cursor-not-allowed disabled:opacity-50 border border-gray-200 resize-none`,
            className
          )}
          rows={4}
          ref={ref as any}
          {...(props as any)}
        />
      ) : (
        <input
          type={type}
          className={cn(
            `shadow-input flex h-10 w-full rounded-md bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 
              group-hover/input:shadow-none placeholder:text-neutral-400 
              focus-visible:ring-[2px] focus-visible:ring-black focus-visible:outline-none 
              disabled:cursor-not-allowed disabled:opacity-50 border border-gray-200`,
            className
          )}
          ref={ref as any}
          {...props}
        />
      )}
    </motion.div>
  );
});

Input.displayName = "Input";

export { Input };
