"use client"

import { useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from "motion/react"

import { cn } from "@/lib/utils"

/**
 * A custom pointer component that displays an animated cursor when hovering over its parent.
 * Add as a direct child of the section/container that should show the custom cursor.
 * Pass custom children to render a different pointer (e.g. dot, icon) for that section.
 */
export function Pointer({
  className,
  style,
  children,
  ...props
}: HTMLMotionProps<"div">): React.ReactNode {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isActive, setIsActive] = useState(false)
  const boundsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !boundsRef.current) return

    const boundsEl = boundsRef.current
    const parent = boundsEl.parentElement
    if (!parent) return

    parent.style.cursor = "none"

    const checkInBounds = (clientX: number, clientY: number) => {
      const rect = parent.getBoundingClientRect()
      return (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      )
    }

    const handleMouseMove = (e: MouseEvent) => {
      const inside = checkInBounds(e.clientX, e.clientY)
      x.set(e.clientX)
      y.set(e.clientY)
      setIsActive(inside)
    }

    document.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      parent.style.cursor = ""
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [x, y])

  return (
    <>
      <div
        ref={boundsRef}
        className="contents"
        aria-hidden
      />
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="custom-pointer"
            className={cn(
              "pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2",
              className
            )}
            style={{
              left: x,
              top: y,
              ...style,
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            {...props}
          >
            {children ?? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={cn("rotate-[-70deg] stroke-white text-black drop-shadow-md", className)}
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
