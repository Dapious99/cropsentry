import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The team building CropSentry — agronomists, AI engineers, and product builders working to protect Africa's harvests.",
  openGraph: {
    title: "About — CropSentry",
    description: "Meet the team behind CropSentry.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

const team = [
  {
    name: "Adebola Okonkwo",
    role: "Co-founder & CEO",
    bio: "Agricultural economist (Univ. of Ibadan). Former programs lead at a Nigerian agritech cooperative. Grew up on a cassava farm in Oyo State.",
    img: "/team-founder.jpg",
    linkedin: "#",
  },
  {
    name: "Chiamaka Eze",
    role: "Co-founder & CTO",
    bio: "ML engineer with 6 years at fintech and computer-vision startups. MSc Computer Science. Leads model development and infrastructure.",
    img: "/team-eng.jpg",
    linkedin: "#",
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
            for the farmers who feed Africa. We're a mix of agronomists, AI engineers, and
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
                  <a
                    href={m.linkedin}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-foreground hover:text-leaf"
                  >
                  </a>
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
              In 2023, Adebola visited his family's cassava farm and found a quarter of
              the field destroyed by mosaic virus. By the time the local extension officer
              arrived — two weeks later — the disease had spread to three neighboring farms.
            </p>
            <p>
              That experience isn't unique. It plays out millions of times every season
              across the continent. We started CropSentry because we believe AI can put a
              plant doctor in every farmer's pocket — affordably, in their language, today.
            </p>
            <p>
              We're incorporated in Lagos, Nigeria as CropSentry Ltd, and we're hiring.
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
