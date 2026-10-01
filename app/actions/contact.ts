"use server";

import { Resend } from "resend";
import { contactSchema, newsletterSchema, type ActionResult } from "@/lib/validations";
import { siteConfig } from "@/lib/data";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function getResend() {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

export async function submitContact(input: unknown): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { company, ...data } = parsed.data;

  // Honeypot triggered — pretend success so bots learn nothing.
  if (company) {
    return { success: true, message: "Thanks! We'll be in touch shortly." };
  }

  const resend = getResend();

  if (!resend) {
    // Email sending is stubbed until RESEND_API_KEY is configured.
    console.info("[contact] New enquiry (RESEND_API_KEY not set — email not sent):", data);
    return {
      success: true,
      message: "Thanks for reaching out! Our team will get back to you within one business day.",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "NV Technology Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? siteConfig.email,
      replyTo: data.email,
      subject: `New ${data.interest} enquiry from ${data.name}`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone || "—")}</p>
        <p><strong>Interested in:</strong> ${escapeHtml(data.interest)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) throw new Error(error.message);

    return {
      success: true,
      message: "Thanks for reaching out! Our team will get back to you within one business day.",
    };
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return {
      success: false,
      message: `Something went wrong while sending your message. Please try again or email us at ${siteConfig.email}.`,
    };
  }
}

export async function subscribeNewsletter(input: unknown): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Please enter a valid email address.",
    };
  }

  // Stub: connect to Resend Audiences, Mailchimp, etc. here.
  console.info("[newsletter] New subscriber:", parsed.data.email);
  return { success: true, message: "You're subscribed — welcome aboard!" };
}
