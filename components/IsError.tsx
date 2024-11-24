"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const IsError = () => {
  return (
    <section className="mt-24">
      <h2 className="font-bold text-lg md:text-3xl text-center">
        Something went wrong!
      </h2>
      <DotLottieReact src="/error_animation.json" loop autoplay />
    </section>
  );
};
