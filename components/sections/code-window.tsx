"use client";

import { motion } from "framer-motion";
import { CircleCheck, Gauge } from "lucide-react";

type Token = { text: string; className?: string };

const kw = "text-[#c084fc]";
const fn = "text-[#67e8f9]";
const str = "text-[#86efac]";
const prop = "text-[#a5b4fc]";
const muted = "text-slate-500";

const lines: Token[][] = [
  [{ text: "// forge.config.ts", className: muted }],
  [{ text: "import ", className: kw }, { text: "{ build, innovate, grow } " }, { text: "from ", className: kw }, { text: '"@nvtechnology/core"', className: str }],
  [],
  [{ text: "export default ", className: kw }, { text: "async function ", className: kw }, { text: "launch", className: fn }, { text: "() {" }],
  [{ text: "  const ", className: kw }, { text: "product = " }, { text: "await ", className: kw }, { text: "build", className: fn }, { text: "({" }],
  [{ text: "    stack", className: prop }, { text: ": [" }, { text: '"next"', className: str }, { text: ", " }, { text: '"node"', className: str }, { text: ", " }, { text: '"aws"', className: str }, { text: "]," }],
  [{ text: "    quality", className: prop }, { text: ": " }, { text: '"production-ready"', className: str }, { text: "," }],
  [{ text: "  });" }],
  [{ text: "  await ", className: kw }, { text: "innovate", className: fn }, { text: "(product);" }],
  [{ text: "  return ", className: kw }, { text: "grow", className: fn }, { text: "(product, { " }, { text: "users", className: prop }, { text: ": " }, { text: "Infinity", className: "text-[#fdba74]" }, { text: " });" }],
  [{ text: "}" }],
];

export function CodeWindow() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* glow */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[conic-gradient(from_180deg_at_50%_50%,#4f46e5_0deg,#06b6d4_120deg,#4f46e5_240deg,#06b6d4_360deg)] opacity-25 blur-3xl"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1220]/95 shadow-glow ring-1 ring-black/5 backdrop-blur"
        role="img"
        aria-label="Code editor showing a NV Technology launch script that builds, innovates and grows a product"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400">forge.config.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-slate-200 sm:text-[13px]" aria-hidden>
          <code>
            {lines.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.09, duration: 0.35 }}
              >
                <span className="mr-4 inline-block w-4 text-right text-slate-600 select-none">{i + 1}</span>
                {line.length === 0 ? " " : line.map((t, j) => (
                  <span key={j} className={t.className}>
                    {t.text}
                  </span>
                ))}
                {i === lines.length - 1 ? (
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-[#67e8f9]" />
                ) : null}
              </motion.span>
            ))}
          </code>
        </pre>
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-400" /> main
          </span>
          <span>TypeScript · UTF-8</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -bottom-6 -left-2 hidden items-center gap-3 rounded-2xl border bg-card/95 p-3 pr-4 shadow-card backdrop-blur sm:flex lg:-left-10"
        aria-hidden
      >
        <span className="grid size-9 place-items-center rounded-xl bg-emerald-500/10 text-success">
          <CircleCheck className="size-5" />
        </span>
        <span className="flex flex-col">
          <span className="text-xs text-muted-foreground">Deployment</span>
          <span className="text-sm font-semibold text-foreground">Live in production</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute -top-6 -right-2 hidden animate-float items-center gap-3 rounded-2xl border bg-card/95 p-3 pr-4 shadow-card backdrop-blur sm:flex lg:-right-8"
        aria-hidden
      >
        <span className="grid size-9 place-items-center rounded-xl bg-highlight/10 text-highlight-foreground">
          <Gauge className="size-5" />
        </span>
        <span className="flex flex-col">
          <span className="text-xs text-muted-foreground">Lighthouse</span>
          <span className="text-sm font-semibold text-foreground">98 / 100</span>
        </span>
      </motion.div>
    </div>
  );
}
