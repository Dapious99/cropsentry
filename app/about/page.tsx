import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The team building CropSentry — agronomists, AI engineers, and product builders working to protect Africa&apos;s harvests.",
  openGraph: {
    title: "About — CropSentry",
    description: "Meet the team behind CropSentry.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

const team = [
  {
    name: "Petra Ukwueze",
    role: "Co-founder & CEO",
    bio: "Agricultural entrepreneur and agritech advocate from Enugu State. Leads CropSentry's vision, farmer partnerships, and community outreach across South-East Nigeria.",
    img: "/team-founder.jpg",
    x: "https://x.com/agoozziem?s=11",
    facebook: "https://www.facebook.com/share/1DHxmR5tX6/?mibextid=wwXIfr",
  },
  {
    name: "Chiamaka Eze",
    role: "Co-founder & CTO",
    bio: "ML engineer with 6 years at fintech and computer-vision startups. MSc Computer Science. Leads model development and infrastructure.",
    img: "/team-eng.jpg",
    x: "",
    facebook: "",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">About CropSentry</p>
          <h1 className="mt-4 text-5xl md:text-6xl">A small team with a serious mission.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            CropSentry Ltd is a Nigerian agritech company building computer-vision tools
            for the farmers who feed Africa. We&apos;re a mix of agronomists, AI engineers, and
            product builders who believe technology should reach the last mile — not just
            the largest farms.
          </p>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-page max-w-4xl">
          <p className="eyebrow">The team</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Real people. Real expertise.</h2>
          <div className="mt-12 flex items-center flex-col md:flex-row gap-8">
            {team.map((m) => (
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
                  <div className="mt-4 flex gap-3">
                    {m.x && (
                      <a href={m.x} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-muted-foreground hover:text-leaf">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                        </svg>
                      </a>
                    )}
                    {m.facebook && (
                      <a href={m.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-leaf">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Why we started CropSentry.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground">
            <p>
              In 2023, Petra visited her family&apos;s cassava farm in Enugu State and found a quarter of
              the field destroyed by mosaic virus. By the time the local extension officer
              arrived — two weeks later — the disease had spread to three neighboring farms.
            </p>
            <p>
              That experience isn&apos;t unique. It plays out millions of times every season
              across the continent. We started CropSentry because we believe AI can put a
              plant doctor in every farmer&apos;s pocket — affordably, in their language, today.
            </p>
            <p>
              We&apos;re incorporated in Enugu, Nigeria as CropSentry Ltd, and we&apos;re hiring.
              If you care about food security, AI for good, or building products for
              emerging markets —{" "}
              <Link href="/contact" className="text-leaf underline-offset-4 hover:underline">
                come talk to us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
