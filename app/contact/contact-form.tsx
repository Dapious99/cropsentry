"use client";

import { useState, useEffect } from "react";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const timer = setTimeout(() => setSent(false), 3000);
    return () => clearTimeout(timer);
  }, [sent]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formsubmit.co/ajax/23dc39080c3038524fdcc20e10a49157", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
    } finally {
      setSent(true);
      setSending(false);
    }
  }

  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Let&apos;s talk.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you&apos;re a farmer, cooperative, agronomist, investor, or future teammate — we
            read every message.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf/15 text-leaf">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:petra@cropsentry.site"
                  className="text-base font-medium hover:text-leaf"
                >
                  petra@cropsentry.site
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf/15 text-leaf">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+2349049585154" className="text-base font-medium hover:text-leaf">
                  09049585154
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf/15 text-leaf">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Headquarters</p>
                <p className="text-base font-medium">No 3 Chief Agbo Street, Nkwo Nike, Enugu</p>
                <p className="text-sm text-muted-foreground">CropSentry Ltd · RC pending</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf/15 text-leaf">
                <MessageSquare className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Press &amp; partnerships</p>
                <a
                  href="mailto:petra@cropsentry.site"
                  className="text-base font-medium hover:text-leaf"
                >
                  petra@cropsentry.site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card-surface p-8 md:p-10">
          {sent ? (
            <div className="py-12 text-center">
              <svg className="mx-auto h-14 w-14 text-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
              </svg>
              <h2 className="mt-4 text-3xl">Thanks — we&apos;ll be in touch.</h2>
              <p className="mt-3 text-muted-foreground">We typically reply within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-2xl">Send us a message</h2>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Organization (optional)" name="org" />
              <div>
                <label className="text-sm font-medium" htmlFor="topic">
                  I&apos;m interested in…
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Requesting a demo</option>
                  <option>Joining the pilot</option>
                  <option>Investing</option>
                  <option>Partnership / NGO</option>
                  <option>Joining the team</option>
                  <option>Press / media</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full md:w-auto disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
