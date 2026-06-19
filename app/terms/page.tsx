import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing your use of CropSentry services.",
  openGraph: {
    title: "Terms of Use — CropSentry",
    description: "Terms governing use of CropSentry.",
    url: "/terms",
  },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="section-pad">
      <article className="container-page max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 text-5xl">Terms of Use</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: June 10, 2026</p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <Section title="1. Acceptance">
            By using CropSentry services, you agree to these terms. If you do not
            agree, please do not use the services.
          </Section>
          <Section title="2. Service description">
            CropSentry provides AI-powered crop disease detection and advisory information.
            Our diagnoses and recommendations are decision-support tools — they do not
            replace professional agronomic, veterinary, or regulatory advice.
          </Section>
          <Section title="3. No warranty on diagnoses">
            AI detection is probabilistic. We provide confidence scores, but no diagnosis
            is guaranteed. You are responsible for verifying critical decisions with a
            qualified agronomist.
          </Section>
          <Section title="4. Acceptable use">
            You agree not to misuse the service, attempt to reverse-engineer our models,
            or upload content that is illegal or violates third-party rights.
          </Section>
          <Section title="5. Intellectual property">
            All software, models, and content are owned by CropSentry Ltd unless stated
            otherwise. You retain ownership of images you upload, but grant us a license
            to use anonymized versions to improve the service.
          </Section>
          <Section title="6. Liability">
            To the maximum extent permitted by law, CropSentry is not liable for indirect
            or consequential losses arising from use of the service.
          </Section>
          <Section title="7. Termination">
            We may suspend or terminate access for violations of these terms.
          </Section>
          <Section title="8. Governing law">
            These terms are governed by the laws of the Federal Republic of Nigeria.
          </Section>
          <Section title="9. Contact">
            Questions?{" "}
            <a href="mailto:petra@cropsentry.site" className="text-leaf underline-offset-4 hover:underline">
              petra@cropsentry.site
            </a>
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
