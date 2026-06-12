import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CropSentry. Email hello@cropsentry.ai or request a demo.",
  openGraph: {
    title: "Contact — CropSentry",
    description: "Request a demo or partner with CropSentry.",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactForm />;
}
