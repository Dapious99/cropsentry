"use client";

import { useState } from "react";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Let&apos;s talk.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you&apos;re a farmer, cooperative, agronomist, investor, or future teammate —
            we read every message.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf/15 text-leaf">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:hello@cropsentry.ai" className="text-base font-medium hover:text-leaf">
                  hello@cropsentry.ai
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf/15 text-leaf">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Headquarters</p>
                <p className="text-base font-medium">Lagos, Nigeria</p>
                <p className="text-sm text-muted-foreground">CropSentry Ltd · RC pending</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-leaf/15 text-leaf">
                <MessageSquare className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Press & partnerships</p>
                <a href="mailto:partners@cropsentry.ai" className="text-base font-medium hover:text-leaf">
                  partners@cropsentry.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card-surface p-8 md:p-10">
          {sent ? (
            <div className="py-12 text-center">
              <h2 className="text-3xl">Thanks — we&apos;ll be in touch.</h2>
              <p className="mt-3 text-muted-foreground">We typically reply within 48 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e: React.FormEvent) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
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
              <button type="submit" className="btn-primary w-full md:w-auto">
                Send message
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
