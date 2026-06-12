import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ScanLine, Bell, BarChart3, Leaf, Cpu, CloudCog,
  ArrowRight, ShieldCheck, Smartphone, Sparkles, MapPin, Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CropSentry — Catch crop disease before it spreads",
  description:
    "Scan a leaf with your phone. Our AI detects 40+ crop diseases in seconds, alerts you early, and recommends treatment — built for African farmers.",
  openGraph: {
    title: "CropSentry — Catch crop disease before it spreads",
    description:
      "AI computer vision for early crop disease detection. Scan a leaf, get a diagnosis, save your harvest.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <Problem />
      <Solution />
      <AITech />
      <Features />
      <HowItWorks />
      <Infrastructure />
      <Market />
      <Traction />
      <Roadmap />
      <WhyNow />
      <Team />
      <CTA />
    </>
  );
}

/* ──────────────── Hero ──────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid items-center gap-12 pt-16 pb-20 md:grid-cols-2 md:gap-16 md:pt-24 md:pb-28">
        <div>
          <p className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> AI Computer Vision for Agriculture
          </p>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Catch crop disease <span className="text-leaf italic">before</span> it spreads.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            CropSentry uses AI to detect crop diseases and pests from a single leaf photo —
            helping African farmers prevent yield loss, reduce input waste, and act early.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/solution" className="btn-ghost">Explore solutions</Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-leaf" /> 40+ diseases detected</span>
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-leaf" /> Works offline</span>
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-leaf" /> 5 local languages</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-leaf/20 via-harvest/20 to-transparent blur-2xl" />
          <Image
            src="/hero-scan.jpg"
            alt="Farmer scanning a maize leaf with the CropSentry mobile app at sunset"
            width={1600}
            height={1100}
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            priority
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-[var(--shadow-lift)] backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-leaf/15 text-leaf">
                <ScanLine className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Diagnosis</p>
                <p className="text-sm font-medium">Cassava Mosaic · 94% confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Trust logos ──────────────── */
function Logos() {
  const items = ["Pilot farms in Lagos", "IITA collaboration (proposed)", "FMARD aligned", "AWS Activate", "NVIDIA Inception (applied)"];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-page flex flex-wrap items-center justify-between gap-6 py-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </section>
  );
}

/* ──────────────── Problem ──────────────── */
function Problem() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow">The problem</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            African farmers lose <span className="text-destructive">up to 40%</span> of harvests to preventable disease.
          </h2>
        </div>
        <div className="space-y-5 text-base text-muted-foreground md:pt-10">
          <p>
            Smallholder farmers across Sub-Saharan Africa produce most of the continent's
            food, yet diseases like Cassava Mosaic Virus, Fall Armyworm, Maize Lethal
            Necrosis, and Tomato Blight wipe out 20–40% of yields every season.
          </p>
          <p>
            By the time symptoms become obvious, the disease has already spread.
            Agricultural extension officers are stretched thin — one officer often covers
            thousands of farmers. Farmers either treat the wrong problem, over-spray
            chemicals, or lose the crop entirely.
          </p>
          <p className="font-medium text-foreground">
            The cost: billions of dollars in lost food, lost income, and food insecurity.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Solution ──────────────── */
function Solution() {
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <Image
            src="/leaf-disease.jpg"
            alt="Cassava leaf showing early mosaic virus symptoms"
            width={1200}
            height={900}
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="eyebrow">The solution</p>
          <h2 className="mt-4 text-4xl md:text-5xl">A pocket-sized plant doctor.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Snap a photo of a leaf. In under 3 seconds, CropSentry's AI identifies the
            disease, scores severity, and gives the farmer a clear, low-cost action plan
            in their language.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              ["Early detection", "Spot disease 7–14 days before visible symptoms."],
              ["Localized advice", "Recommendations adapted to crop, region, and season."],
              ["Outbreak alerts", "Region-wide alerts when disease is spreading nearby."],
              ["Works offline", "Designed for low-bandwidth rural environments."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="font-medium">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── AI Technology ──────────────── */
function AITech() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow"><Cpu className="h-3.5 w-3.5" /> AI Technology</p>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Computer vision trained on African crops, by African researchers.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Most agriculture AI is trained on Western datasets. Our models are
            purpose-built for the crops, climates, and disease patterns of Sub-Saharan
            Africa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ScanLine, title: "What it sees", body: "Leaf images captured by smartphone cameras — even low-light, blurry, or partial frames." },
            { icon: Sparkles, title: "What it predicts", body: "Disease class, severity score (0–100), confidence, and risk of spread to neighboring plants." },
            { icon: Cpu, title: "Models used", body: "Fine-tuned EfficientNet-B4 + Vision Transformer ensemble, distilled to a 12MB on-device model." },
            { icon: CloudCog, title: "Why GPUs matter", body: "Training on millions of images and continual learning from field uploads requires GPU acceleration." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-surface p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Features ──────────────── */
function Features() {
  const items = [
    { icon: ScanLine, title: "Instant leaf scanning", body: "Point, shoot, diagnose. Results in under 3 seconds, even offline." },
    { icon: Bell, title: "Outbreak alerts", body: "Push notifications when disease is detected on nearby farms." },
    { icon: Leaf, title: "Treatment plans", body: "Step-by-step, locally-sourced treatment options ranked by cost." },
    { icon: BarChart3, title: "Farm analytics", body: "Track scan history, disease trends, and field health over time." },
    { icon: Smartphone, title: "5 local languages", body: "English, Yoruba, Hausa, Igbo, and Swahili at launch." },
    { icon: ShieldCheck, title: "Extension officer mode", body: "Tools for agronomists to monitor dozens of farms at once." },
  ];
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">What you get</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Six tools, one app.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-surface p-7 transition-transform hover:-translate-y-0.5">
              <Icon className="h-6 w-6 text-leaf" />
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── How it works ──────────────── */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Open CropSentry on your phone", d: "Tap 'Scan'. The camera opens with a leaf guide overlay." },
    { n: "02", t: "Photograph a single leaf", d: "Our AI handles the rest — no expertise needed." },
    { n: "03", t: "Get a diagnosis in 3 seconds", d: "Disease name, severity, confidence score, and treatment plan." },
    { n: "04", t: "Act early. Save the harvest.", d: "Follow the plan or share it with your local extension officer." },
  ];
  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 text-4xl md:text-5xl">From leaf to action in 30 seconds.</h2>
          <ol className="mt-10 space-y-8">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="font-display text-2xl text-leaf">{s.n}</span>
                <div>
                  <h3 className="text-xl">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-harvest/20 to-leaf/10 blur-xl" />
          <Image
            src="/app-dashboard.jpg"
            alt="CropSentry mobile app showing disease detection result with treatment recommendations"
            width={1200}
            height={1400}
            className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Infrastructure ──────────────── */
function Infrastructure() {
  return (
    <section className="section-pad bg-primary text-primary-foreground">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow text-harvest">Technology & Infrastructure</p>
          <h2 className="mt-4 text-4xl text-primary-foreground md:text-5xl">
            Built on cloud-scale AI infrastructure.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80">
            CropSentry is designed to scale from thousands to millions of scans per day —
            using best-in-class cloud and accelerated computing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
            <h3 className="text-2xl text-primary-foreground">How we use AWS</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>• <strong>Amazon S3</strong> — secure storage for training images and farmer scans</li>
              <li>• <strong>Amazon RDS</strong> — scan history, farms, users, outbreak data</li>
              <li>• <strong>AWS Lambda + ECS</strong> — inference API, image preprocessing</li>
              <li>• <strong>Amazon Bedrock</strong> — multimodal advice generation in local languages</li>
              <li>• <strong>Amazon CloudFront</strong> — fast app delivery across the continent</li>
              <li>• <strong>Amazon SNS + CloudWatch</strong> — real-time outbreak alerts and monitoring</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
            <h3 className="text-2xl text-primary-foreground">How we use NVIDIA</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>• <strong>CUDA + cuDNN</strong> — GPU-accelerated model training on millions of leaf images</li>
              <li>• <strong>TensorRT</strong> — inference optimization for sub-100ms scan response</li>
              <li>• <strong>Triton Inference Server</strong> — scalable, multi-model serving</li>
              <li>• <strong>NVIDIA Jetson</strong> — edge AI for low-connectivity field deployments</li>
              <li>• <strong>NeMo + RAPIDS</strong> — language model fine-tuning and data pipeline acceleration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Market ──────────────── */
function Market() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Market opportunity</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Serving the farmers who feed Africa.</h2>
          <p className="mt-5 text-muted-foreground">
            Africa has over 33 million smallholder farms. Mobile penetration is past 80%
            in our launch markets, and government extension services cannot scale fast
            enough. AI on a $80 smartphone closes the gap.
          </p>
        </div>
        <div className="space-y-5">
          {[
            { k: "Target users", v: "Smallholder farmers, agronomists, cooperatives, agribusinesses, agri-NGOs" },
            { k: "Launch markets", v: "Nigeria, Ghana, Kenya, Rwanda, Côte d'Ivoire" },
            { k: "Revenue model", v: "Freemium app · Cooperative subscriptions · Enterprise API for agribusinesses · NGO/government licensing" },
            { k: "Growth plan", v: "Pilot in Lagos & Oyo State (2026), expand to West Africa (2027), Pan-African (2028)" },
          ].map(({ k, v }) => (
            <div key={k} className="card-surface p-5">
              <p className="text-xs uppercase tracking-wider text-leaf">{k}</p>
              <p className="mt-2 text-sm">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Traction ──────────────── */
function Traction() {
  return (
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
      <div className="container-page">
        <p className="eyebrow">Where we are today</p>
        <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">
          MVP in development. Pilot opening in Q1 2026.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            ["12,000+", "leaf images labeled in our training dataset"],
            ["3", "pilot cooperatives signed letters of interest"],
            ["40+", "diseases targeted across maize, cassava, tomato, cocoa"],
            ["Beta Q1", "2026 — limited rollout in Lagos & Oyo State"],
          ].map(([h, b]) => (
            <div key={h} className="card-surface p-6">
              <p className="font-display text-3xl text-leaf md:text-4xl">{h}</p>
              <p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Roadmap ──────────────── */
function Roadmap() {
  const phases = [
    ["Phase 1", "Q4 2025", "MVP & model training", "Build core scanning app, train on 50k+ images, recruit pilot farms."],
    ["Phase 2", "Q1 2026", "Closed beta", "Deploy with 3 cooperatives in Lagos & Oyo State. Iterate weekly."],
    ["Phase 3", "Q3 2026", "Public launch", "Open app to all of Nigeria. Add Yoruba, Hausa, Igbo languages."],
    ["Phase 4", "2027", "Cloud scale", "AWS production deployment, GPU inference, extension officer dashboard."],
    ["Phase 5", "2027", "Regional expansion", "Ghana, Kenya, Rwanda, Côte d'Ivoire. New crops: rice, cocoa, plantain."],
    ["Phase 6", "2028", "Pan-African network", "Continent-wide outbreak intelligence and enterprise API."],
  ];
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-page">
        <p className="eyebrow">Roadmap</p>
        <h2 className="mt-4 text-4xl md:text-5xl">What we're building next.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {phases.map(([p, when, t, d]) => (
            <div key={p} className="card-surface p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-leaf">{p}</span>
                <span className="text-xs text-muted-foreground">{when}</span>
              </div>
              <h3 className="mt-3 text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Why now ──────────────── */
function WhyNow() {
  return (
    <section className="section-pad">
      <div className="container-page max-w-4xl">
        <p className="eyebrow">Why now</p>
        <h2 className="mt-4 text-4xl md:text-5xl">
          The first time mobile AI, climate pressure, and food security collide.
        </h2>
        <div className="mt-8 grid gap-6 text-muted-foreground md:grid-cols-3">
          <p><strong className="text-foreground">Mobile reach.</strong> Smartphone penetration in our launch markets has crossed 80%, putting AI in every farmer's hand.</p>
          <p><strong className="text-foreground">Climate stress.</strong> Shifting rainfall is changing disease patterns faster than extension services can keep up.</p>
          <p><strong className="text-foreground">AI is ready.</strong> Computer vision is now accurate, small, and cheap enough to run offline on a $80 phone.</p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Team ──────────────── */
function Team() {
  const leaders = [
    { name: "Adebola Okonkwo", role: "Co-founder & CEO", bio: "Agricultural economist. Former programs lead at a Nigerian agritech cooperative. Grew up on a cassava farm in Oyo State.", img: "/team-founder.jpg", linkedin: "#" },
    { name: "Chiamaka Eze", role: "Co-founder & CTO", bio: "ML engineer with 6 years at fintech and computer-vision startups. MSc Computer Science. Leads model development and infrastructure.", img: "/team-eng.jpg", linkedin: "#" },
  ];
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-page">
        <p className="eyebrow">Leadership</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Built by people who understand the problem.</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {leaders.map((m) => (
            <article key={m.name} className="card-surface overflow-hidden">
              <Image
                src={m.img}
                alt={`Portrait of ${m.name}, ${m.role} at CropSentry`}
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl">{m.name}</h3>
                <p className="text-sm text-leaf">{m.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
                <a href={m.linkedin} className="mt-4 inline-flex items-center gap-2 text-sm text-foreground hover:text-leaf">
                  {/* <Linkedin className="h-4 w-4" /> LinkedIn */}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Final CTA ──────────────── */
function CTA() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-4xl text-primary-foreground md:text-5xl">
                Help us protect Africa's next harvest.
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/80">
                Whether you're a farmer, an agronomist, a cooperative, or an investor —
                we'd love to talk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/contact" className="btn-accent">Request a demo</Link>
              <Link href="/impact" className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10">
                See our impact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
