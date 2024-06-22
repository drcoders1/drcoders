"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
  childrenNotHorizontallyCentered,
  dotHoverColor,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  childrenNotHorizontallyCentered?: boolean;
  dotHoverColor?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "group relative flex h-[44rem] w-full items-center bg-white dark:bg-black",
        containerClassName,
        {
          "justify-center": !childrenNotHorizontallyCentered,
          "justify-start": childrenNotHorizontallyCentered,
        },
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-thick-neutral-800" />
      {/* color the circle around moving cursor */}
      <motion.div
        className={cn(
          `pointer-events-none absolute inset-0  opacity-0 transition duration-300 group-hover:opacity-100 ${dotHoverColor ? dotHoverColor : "bg-dot-thick-lime-500"}`,
        )}
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

// highlighed text
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg  bg-gradient-to-r from-base-light-blue to-base-purple px-1 pb-1`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
