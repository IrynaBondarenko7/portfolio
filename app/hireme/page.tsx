import type { Metadata } from "next";
import { CommunicationForm } from "@/components/CommunicationForm";

export const metadata: Metadata = {
  title: "HireMe",
  description: "How to communicate with Iryna Bondarenko",
};

export default function HireMe() {
  return (
    <section className="mt-20 mb-5">
      <CommunicationForm />
    </section>
  );
}
