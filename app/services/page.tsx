import type { Metadata } from "next";
import { FaCode } from "react-icons/fa";
import { services } from "../../data.json";

export const metadata: Metadata = {
  title: "Iryna's Services",
  description: "Iryna Bondarenko services",
};

export default function ServicesPage() {
  return (
    <section className="mt-24">
      <h1 className="font-semibold text-white flex gap-4 items-center justify-center text-lg md:text-xl xl:text-2xl mb-3">
        Services
      </h1>
      <div className="flex w-full justify-center xl:w-[900px] mx-auto">
        <ul className="mt-3 w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-5">
          {services.map(({ name, description }) => {
            return (
              <li key={name} className="rounded-xl bg-white/5 p-3">
                <div className="rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                  <h2 className="font-semibold text-white flex gap-4 items-center justify-center text-base xl:text-xl mb-3">
                    <span>{name}</span>
                    <FaCode />
                  </h2>
                  <p className="text-sm xl:text-lg">{description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
