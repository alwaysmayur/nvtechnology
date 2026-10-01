"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { submitContact } from "@/app/actions/contact";
import { interestLabels } from "@/lib/data";
import { contactSchema, interestOptions, type ContactInput, type Interest } from "@/lib/validations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="flex items-center gap-1.5 text-xs font-medium text-destructive">
      <CircleAlert className="size-3.5 shrink-0" aria-hidden />
      {message}
    </p>
  );
}

export function ContactForm({ defaultInterest }: { defaultInterest?: Interest }) {
  // Empty string selects the "Select an option" placeholder; zod rejects it on submit.
  const emptyValues: ContactInput = {
    name: "",
    email: "",
    phone: "",
    interest: (defaultInterest ?? "") as Interest,
    message: "",
    company: "",
  };
  const [result, setResult] = React.useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: emptyValues,
    mode: "onTouched",
  });

  async function onSubmit(values: ContactInput) {
    setResult(null);
    try {
      const res = await submitContact(values);
      if (res.success) {
        setResult(res);
        reset(emptyValues);
        return;
      }
      if (res.fieldErrors) {
        for (const [field, messages] of Object.entries(res.fieldErrors)) {
          if (messages?.[0]) setError(field as keyof ContactInput, { message: messages[0] });
        }
      }
      setResult(res);
    } catch {
      setResult({ success: false, message: "Network error — please check your connection and try again." });
    }
  }

  if (result?.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-success/30 bg-success/5 px-6 py-12 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="grid size-14 place-items-center rounded-full bg-success/10 text-success">
          <CircleCheck className="size-7" aria-hidden />
        </span>
        <h4 className="text-lg font-semibold">Message sent!</h4>
        <p className="max-w-sm text-sm text-muted-foreground">{result.message}</p>
        <Button variant="outline" onClick={() => setResult(null)}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 grid gap-5" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name *</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="interest">I&apos;m interested in *</Label>
          <div className="relative">
            <select
              id="interest"
              aria-invalid={!!errors.interest}
              aria-describedby={errors.interest ? "interest-error" : undefined}
              className={cn(
                "flex h-11 w-full appearance-none rounded-xl border border-input bg-background py-2 pr-10 pl-3.5 text-sm text-foreground shadow-xs transition-[color,box-shadow,border-color] outline-none",
                "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/25",
                "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
              )}
              {...register("interest")}
            >
              <option value="" disabled>
                Select an option
              </option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {interestLabels[option]}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
          </div>
          <FieldError id="interest-error" message={errors.interest?.message} />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, or the program you'd like to join…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      {/* Honeypot (hidden from users and assistive tech) */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div id="form-status" role="status" aria-live="polite">
        <AnimatePresence>
          {result && !result.success ? (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
            >
              <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
              {result.message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-fit">
        {isSubmitting ? (
          <>
            <LoaderCircle className="animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}
