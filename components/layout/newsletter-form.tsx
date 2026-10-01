"use client";

import * as React from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { subscribeNewsletter } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function NewsletterForm() {
  const [pending, startTransition] = React.useTransition();
  const [status, setStatus] = React.useState<{ success: boolean; message: string } | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");
    startTransition(async () => {
      const result = await subscribeNewsletter({ email });
      setStatus(result);
      if (result.success) form.reset();
    });
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex gap-2">
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-describedby="newsletter-status"
          aria-invalid={status?.success === false || undefined}
          className="h-11"
        />
        <Button type="submit" size="icon" className="size-11 shrink-0" disabled={pending} aria-label="Subscribe">
          {pending ? <LoaderCircle className="animate-spin" aria-hidden /> : <ArrowRight aria-hidden />}
        </Button>
      </div>
      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={cn("min-h-5 text-xs", status?.success ? "text-success" : "text-destructive")}
      >
        {status?.message}
      </p>
    </form>
  );
}
