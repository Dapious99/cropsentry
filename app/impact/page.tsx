import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout, Globe2, Users, Leaf, TrendingUp, HeartHandshake, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How CropSentry protects harvests, raises smallholder incomes, reduces chemical overuse, and strengthens food security across Africa.",
  openGraph: {
    title: "Impact — CropSentry",
    description:
      "Food security, farmer livelihoods, and sustainable agriculture — the impact CropSentry is built to deliver.",
    url: "/impact",
  },
  alternates: { canonical: "/impact" },
};

const stats = [
  ["40%", "of harvests lost to preventable disease across Sub-Saharan Africa"],
  ["33M+", "smallholder farms CropSentry is built to serve"],
  ["7–14", "days earlier disease detection vs. visible symptoms"],
  ["80%+", "smartphone penetration in our launch markets"],
];

const sdgs = [
  { icon: Sprout, title: "SDG 2 · Zero Hunger", body: "Protecting harvests directly increases the food supply available to households and local markets." },
  { icon: Users, title: "SDG 1 · No Poverty", body: "Smallholder farmers keep more of what they grow — and earn more from what they sell." },
  { icon: Leaf, title: "SDG 12 · Responsible Consumption", body: "Right-diagnosis means right-treatment — less chemical overuse and runoff." },
  { icon: Globe2, title: "SDG 13 · Climate Action", body: "AI-driven early detection adapts faster than human extension to climate-shifted disease patterns." },
  { icon: HeartHandshake, title: "SDG 5 · Gender Equality", body: "Women farm 40%+ of African land. We design for shared phones, low literacy, and local languages." },
  { icon: TrendingUp, title: "SDG 9 · Innovation", body: "African AI, trained on African crops, deployed at the edge — built locally, scaled regionally." },
];

const pillars = [
  {
    title: "Farmer livelihoods",
    body: "Every prevented outbreak is income kept in a household. We measure success by yield retained per farmer per season, not by app downloads.",
  },
  {
    title: "Food security",
    body: "Africa imports $50B+ in food annually. Reducing on-farm losses is the cheapest, fastest way to close the gap.",
  },
  {
    title: "Sustainable agriculture",
    body: "Correct diagnoses replace blanket spraying with targeted treatment — protecting soil, water, and pollinators.",
  },
  {
    title: "Women in agriculture",
    body: "Our app is designed for shared-phone households, voice-readable diagnoses, and low-literacy interfaces.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Impact</p>
          <h1 className="mt-4 text-5xl md:text-6xl">
            Technology that protects harvests — and the people who grow them.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            CropSentry exists to put a real, measurable dent in the 40% of African
            harvests lost to preventable crop disease each year. This is what we're
            building toward — and how we measure ourselves.
          </p>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <p className="eyebrow">The numbers we're chasing</p>
          <h2 className="mt-4 text-4xl md:text-5xl">The scale of the problem.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map(([h, b]) => (
              <div key={h} className="card-surface p-6">
                <p className="font-display text-4xl text-leaf md:text-5xl">{h}</p>
                <p className="mt-3 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Image
            src="/leaf-disease.jpg"
            alt="Early-stage cassava mosaic detected by CropSentry"
            width={1200}
            height={900}
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
          />
          <div>
            <p className="eyebrow">Our four pillars</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Where we focus our impact.</h2>
            <div className="mt-8 space-y-6">
              {pillars.map((p) => (
                <div key={p.title}>
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <p className="eyebrow">Aligned with the UN SDGs</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Six Sustainable Development Goals, one platform.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sdgs.map(({ icon: Icon, title, body }) => (
              <article key={title} className="card-surface p-7">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-harvest/15 text-harvest">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
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
          <p className="eyebrow">How we measure ourselves</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Outcomes over outputs.</h2>
          <p className="mt-5 text-muted-foreground">
            We report quarterly on four core metrics: yield retained per farmer,
            chemical use avoided, outbreaks contained, and women farmers actively using
            the platform. Pilot data lands in 2026.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Partner with us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/solution" className="btn-ghost">Explore solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
