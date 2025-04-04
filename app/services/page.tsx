import type { Metadata } from "next";

import { Services } from "@/components/Services";
import { Technologies } from "@/components/Technologies";

export const metadata: Metadata = {
  title: "Iryna's Services",
  description: "Iryna Bondarenko services",
};

export default function ServicesPage() {
  return (
    <section className="mt-20 mb-5">
      <h1 className="font-semibold text-white flex gap-4 items-center justify-center text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-3">
        Services
      </h1>
      <Technologies />
      <Services />
    </section>
  );
}
