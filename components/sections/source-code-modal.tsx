"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Mail, MessageSquare, Phone, X, ShieldCheck, FileCode2 } from "lucide-react";
import type { Project } from "@/lib/data";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";

type SourceCodeModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export function SourceCodeModal({ project, isOpen, onClose }: SourceCodeModalProps) {
  const [copied, setCopied] = React.useState(false);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi NV Technology, I want to get the complete source code for "${project.title}" (${project.price}). Please provide the next steps.`
  );
  const whatsappUrl = `https://wa.me/919537412245?text=${whatsappMessage}`;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+919537412245");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border bg-card p-6 shadow-2xl sm:p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-4 right-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="size-5" />
            </button>

            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                <FileCode2 className="size-6" />
              </div>
              <div className="pr-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {project.technology || "MERN Stack"}
                </span>
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {project.price}
                  </span>
                  {project.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {project.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* What's included preview */}
            <div className="mt-6 rounded-xl border bg-muted/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Included in Package:
              </p>
              <ul className="mt-2.5 space-y-1.5 text-xs text-foreground/90">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  <span>Full clean source code with structured Git commits</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  <span>Step-by-step setup guide & sample database</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  <span>Project documentation & architecture overview</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  <span>Setup assistance & developer walkthrough</span>
                </li>
              </ul>
            </div>

            {/* Action options */}
            <div className="mt-6 space-y-3">
              <Button
                asChild
                size="lg"
                className="w-full justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 font-semibold shadow-md"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="size-4 fill-current" />
                  Get via WhatsApp (Instant Reply)
                </a>
              </Button>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="justify-center gap-1.5"
                >
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="size-3.5" />
                    Call Team
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="justify-center gap-1.5"
                >
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                      `Source Code Inquiry: ${project.title}`
                    )}&body=${encodeURIComponent(
                      `Hi NV Technology,\n\nI want to get the source code for ${project.title} (${project.price}).\n\nPlease let me know how to proceed.\n\nThanks!`
                    )}`}
                  >
                    <Mail className="size-3.5" />
                    Send Email
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border px-3 py-2 text-xs text-muted-foreground">
                <span>Direct Contact: +91 9537412245</span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1 font-medium text-foreground hover:text-blue-600"
                >
                  {copied ? (
                    <>
                      <Check className="size-3 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
