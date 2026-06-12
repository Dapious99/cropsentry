import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout, Users, Building2, HeartHandshake, ArrowRight,
  ScanLine, Bell, BarChart3, Leaf, Smartphone, ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "CropSentry solutions for smallholder farmers, cooperatives, agronomists, agribusinesses, and NGOs — AI crop disease detection tailored to each use case.",
  openGraph: {
    title: "Solutions — CropSentry",
    description:
      "Tailored AI crop-health tools for farmers, cooperatives, agronomists, and agribusinesses.",
    url: "/solution",
  },
  alternates: { canonical: "/solution" },
};

const audiences = [
  {
    icon: Sprout,
    title: "For smallholder farmers",
    body: "Scan a leaf, get a diagnosis in seconds, follow a low-cost treatment plan in your language. Works offline on entry-level smartphones.",
    points: ["Free tier for individual farmers", "Yoruba, Hausa, Igbo, Swahili, English", "SMS outbreak alerts (no app required)"],
  },
  {
    icon: Users,
    title: "For cooperatives",
    body: "Equip every farmer in your co-op with a pocket plant doctor. Track field health across thousands of members and respond to outbreaks faster.",
    points: ["Bulk onboarding and training", "Co-op dashboard & member scoring", "Subsidized input procurement"],
  },
  {
    icon: HeartHandshake,
    title: "For agronomists & extension officers",
    body: "Monitor dozens of farms from one dashboard. Triage low-confidence scans, log field visits, and broadcast outbreak guidance.",
    points: ["Multi-farm dashboard", "Confidence-routed escalations", "Field-visit notes & history"],
  },
  {
    icon: Building2,
    title: "For agribusinesses",
    body: "Embed CropSentry diagnostics into your out-grower programs, off-take agreements, and crop-insurance workflows via our enterprise API.",
    points: ["Enterprise scan API", "Out-grower analytics", "Yield-loss risk scoring"],
  },
];

const usecases = [
  { icon: ScanLine, title: "Leaf disease scanning", body: "40+ diseases across maize, cassava, tomato, cocoa — with treatment plans." },
  { icon: Bell, title: "Outbreak intelligence", body: "Regional spread maps and push/SMS alerts when disease is detected nearby." },
  { icon: BarChart3, title: "Farm analytics", body: "Scan history, field health trends, and seasonal yield-risk indicators." },
  { icon: Leaf, title: "Treatment recommendations", body: "Locally-sourced inputs ranked by cost, availability, and effectiveness." },
  { icon: Smartphone, title: "Offline-first mobile app", body: "Built for low-bandwidth rural environments and entry-level Android phones." },
  { icon: ShieldCheck, title: "Human-in-the-loop", body: "Low-confidence scans are routed to a CropSentry agronomist for review." },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Solutions</p>
          <h1 className="mt-4 text-5xl md:text-6xl">One platform. Built for every part of the field.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            CropSentry is designed to meet farmers, cooperatives, agronomists, and
            agribusinesses where they are — from the first scan to continent-scale
            outbreak intelligence.
          </p>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <p className="eyebrow">Who we serve</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Tailored to your role in the value chain.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {audiences.map(({ icon: Icon, title, body, points }) => (
              <article key={title} className="card-surface p-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-leaf/15 text-leaf">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{body}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow">Core capabilities</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Everything in one app.</h2>
            <p className="mt-5 text-muted-foreground">
              Whether you're scanning your first leaf or monitoring 10,000 farms,
              CropSentry brings detection, diagnosis, and decision support into a single,
              affordable workflow.
            </p>
          </div>
          <Image
            src="/app-dashboard.jpg"
            alt="CropSentry mobile dashboard"
            width={1200}
            height={900}
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
          />
        </div>

        <div className="container-page mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {usecases.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-surface p-6">
              <Icon className="h-6 w-6 text-leaf" />
              <h3 className="mt-4 text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden section-pad">
        <Image
          src="/farmland.jpg"
          alt=""
          aria-hidden
          width={1920}
          height={900}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-background/85" />
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Ready to deploy</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Find the right fit for your organization.</h2>
          <p className="mt-5 text-muted-foreground">
            Tell us about your farms, members, or out-grower program — we'll put together
            a pilot proposal within a week.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/impact" className="btn-ghost">See our impact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
