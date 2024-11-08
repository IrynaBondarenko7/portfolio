import { PersonalInfo } from "./PersonalInfo";

export const Introduction = () => {
  return (
    <section className="mt-28 md:mt-36 xl:mt-52 xl:pb-4 relative">
      <div className=" flex items-start justify-start gap-20 md:gap-8 xl:gap-20">
        <div className="flex flex-col  gap-20 xl:gap-36 md:gap-28 items-center w-16 md:w-24 xl:w-32">
          <p className="inline-flex flex-col gap-2">
            <span className="text-minorTextColor text-6xl md:text-8xl xl:text-9xl font-bona-nova leading-[0.6] md:leading-[0.6] xl:leading-[0.6]">
              07
            </span>
            <span className="font-dancing-script italic md:ml-6 text-minorTextColor text-xl">
              January
            </span>
          </p>
          <div className="rotate-[-90deg] w-64 flex items-center gap-5">
            <h2 className="font-bona-nova text-lg md:text-2xl xl:text-3xl">
              BIRTHDAY
            </h2>
            <span className="bg-white h-[2px] w-20 block"></span>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-10 w-[544px] md:w-[345px] xl:w-[470px]">
          <PersonalInfo />
        </div>
      </div>
      <div className="flex flex-col md:gap-10 gap-4 md:hidden mt-36 bg-secondBg rounded-md">
        <PersonalInfo />
      </div>
      <div>
        <div className="styling-block-1"></div>
        <div className="styling-block-2"></div>
      </div>
    </section>
  );
};
