import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CropSentry collects, uses, and protects your data.",
  openGraph: {
    title: "Privacy Policy — CropSentry",
    description: "How we collect, use, and protect your data.",
    url: "/privacy",
  },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="section-pad">
      <article className="container-page max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: June 10, 2026</p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <Section title="1. Who we are">
            CropSentry Ltd ("CropSentry", "we", "us") is a Nigerian company building
            AI-powered tools for crop disease detection. We can be reached at{" "}
            <a href="mailto:hello@cropsentry.ai" className="text-leaf underline-offset-4 hover:underline">
              hello@cropsentry.ai
            </a>
            .
          </Section>

          <Section title="2. What we collect">
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <strong>Account data:</strong> name, email, phone number, country, language.
              </li>
              <li>
                <strong>Scan data:</strong> leaf images you upload, geolocation (only with your
                permission), crop type, scan timestamp.
              </li>
              <li>
                <strong>Device data:</strong> device model, OS, app version, anonymized usage events.
              </li>
            </ul>
          </Section>

          <Section title="3. How we use your data">
            We use your data to provide diagnoses, improve our AI models, send outbreak
            alerts, and notify you about updates you&apos;ve opted into. We never sell personal data.
          </Section>

          <Section title="4. Your scan images">
            Leaf images you upload may be used (anonymized and stripped of metadata) to
            train and improve our disease detection models. You can opt out at any time
            from your account settings.
          </Section>

          <Section title="5. Sharing">
            We share data with infrastructure providers (e.g., AWS) under strict
            data-processing agreements. We may share anonymized, aggregated regional
            disease data with public-health and agricultural authorities to support
            outbreak response.
          </Section>

          <Section title="6. Security">
            Data is encrypted in transit (TLS) and at rest (AES-256). Access is restricted
            to authorized personnel and audited.
          </Section>

          <Section title="7. Your rights">
            You may request a copy of your data, correct it, or delete your account at any
            time by emailing{" "}
            <a href="mailto:hello@cropsentry.ai" className="text-leaf">
              hello@cropsentry.ai
            </a>
            . We respond within 30 days.
          </Section>

          <Section title="8. Changes">
            We will notify you of material changes to this policy via email or in-app notice.
          </Section>
        </div>
      </article>
    </section>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl text-foreground">{title}</h2>
      <div className="mt-3 text-base">{children}</div>
    </div>
  );
}
