"use client";
import { Circles } from "react-loader-spinner";
export const Loading = () => {
  return (
    <section className="mt-32 flex justify-center">
      <Circles
        height="80"
        width="80"
        color="#fff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </section>
  );
};
