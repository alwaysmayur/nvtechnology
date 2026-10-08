"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Clock,
  GraduationCap,
  MessageSquare,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import type { InternshipOffer } from "@/lib/data";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";

type InternshipApplyModalProps = {
  offer: InternshipOffer | null;
  isOpen: boolean;
  onClose: () => void;
};

export function InternshipApplyModal({ offer, isOpen, onClose }: InternshipApplyModalProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  if (!offer) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi NV Technology, I want to apply for the "${offer.title}" (${offer.duration} - ${offer.price}). Please share the enrollment procedure.`
  );
  const whatsappUrl = `https://wa.me/919537412245?text=${whatsappMessage}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
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
                <GraduationCap className="size-6" />
              </div>
              <div className="pr-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {offer.category} • {offer.duration}
                </span>
                <h3 className="text-xl font-bold text-foreground">{offer.title}</h3>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {offer.price}
                  </span>
                  <span className="text-xs text-muted-foreground">inclusive of mentorship & certificate</span>
                </div>
              </div>
            </div>

            {/* Program Highlights */}
            <div className="mt-5 rounded-xl border bg-muted/40 p-3.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Internship Benefits:
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-foreground/90">
                <div className="flex items-center gap-1.5">
                  <Award className="size-3.5 text-blue-600 shrink-0" />
                  <span>Completion Certificate</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-blue-600 shrink-0" />
                  <span>Flexible / Online Mode</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-blue-600 shrink-0" />
                  <span>Live Project Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-blue-600 shrink-0" />
                  <span>Senior Code Reviews</span>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="my-8 flex flex-col items-center justify-center text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40">
                  <CheckCircle2 className="size-8" />
                </div>
                <h4 className="mt-3 text-lg font-bold">Application Received!</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  Our coordinator will reach out to you via WhatsApp / phone shortly.
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {/* Instant WhatsApp Apply */}
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 font-semibold shadow-md"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="size-4 fill-current" />
                    Apply via WhatsApp (Instant Approval)
                  </a>
                </Button>

                <div className="relative flex items-center justify-center text-xs text-muted-foreground">
                  <span className="w-full border-t" />
                  <span className="bg-card px-2">or quick register</span>
                  <span className="w-full border-t" />
                </div>

                {/* Quick Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-lg border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-blue-600 focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-lg border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-blue-600 focus:outline-none"
                  />

                  <input
                    type="text"
                    placeholder="College / Degree (e.g. BCA, B.Tech 3rd Year)"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full rounded-lg border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-blue-600 focus:outline-none"
                  />

                  <Button
                    type="submit"
                    variant="outline"
                    className="w-full justify-center gap-1.5 border-blue-600/40 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/40"
                  >
                    <Send className="size-3.5" />
                    Submit Application
                  </Button>
                </form>

                <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
                  <span>Questions? Call: +91 9537412245</span>
                  <a href={`tel:${siteConfig.phone}`} className="font-medium text-blue-600 hover:underline">
                    Call Office
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
