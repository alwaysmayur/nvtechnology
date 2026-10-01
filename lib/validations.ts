import { z } from "zod";

export const interestOptions = ["Service", "Internship", "Training"] as const;
export type Interest = (typeof interestOptions)[number];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{7,20}$/, "Please enter a valid phone number.")
    .or(z.literal("")),
  interest: z.enum(interestOptions, { message: "Please choose what you're interested in." }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters).")
    .max(2000, "Message must be under 2000 characters."),
  // Honeypot — real users never see or fill this field.
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export type ActionResult =
  | { success: true; message: string }
  | { success: false; message: string; fieldErrors?: Record<string, string[] | undefined> };
