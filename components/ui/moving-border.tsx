// components/ui/moving-border.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl h-16 w-64 p-px overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--blue-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-zinc-900 dark:bg-zinc-100 backdrop-blur-xl text-white dark:text-zinc-900 flex items-center justify-center w-full h-full text-lg font-semibold antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: unknown;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const animRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const [transform, setTransform] = useState<string>("translateX(0px) translateY(0px) translateX(-50%) translateY(-50%)");

  useEffect(() => {
    function step(time: number) {
      if (!pathRef.current) {
        animRef.current = requestAnimationFrame(step);
        return;
      }
      const length = pathRef.current.getTotalLength();
      if (!length) {
        animRef.current = requestAnimationFrame(step);
        return;
      }

      if (startRef.current === null) startRef.current = time;
      const elapsed = time - startRef.current;
      const pxPerMillisecond = length / (duration || 2000);
      const pos = ((elapsed * pxPerMillisecond) % length) || 0;
      const point = pathRef.current.getPointAtLength(pos);
      setTransform(`translateX(${point.x}px) translateY(${point.y}px) translateX(-50%) translateY(-50%)`);

      animRef.current = requestAnimationFrame(step);
    }

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [duration]);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="pointer-events-none absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </div>
    </>
  );
};