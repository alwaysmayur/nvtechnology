"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const format = (n: number) => new Intl.NumberFormat("en-IN").format(n);

/** Counts up from 0 to `value` the first time it scrolls into view. */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduceMotion) {
      node.textContent = format(value) + suffix;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (latest) => {
        node.textContent = format(Math.round(latest)) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, suffix]);

  // Server-rendered with the final value so crawlers and no-JS users see real numbers.
  return (
    <span ref={ref} className="tabular-nums">
      {format(value)}
      {suffix}
    </span>
  );
}
