export const Introduction = () => {
  return (
    <section className="mt-60 flex items-start justify-start gap-20">
      <div className="flex flex-col gap-36  items-center  w-32">
        <p className="inline-flex flex-col gap-2">
          <span className="text-minorTextColor text-9xl font-bona-nova leading-[0.6]">
            07
          </span>
          <span className="font-dancing-script italic ml-6 text-minorTextColor text-xl">
            January
          </span>
        </p>
        <div className="rotate-[-90deg] w-64 flex items-center gap-5">
          <h2 className="font-bona-nova text-3xl">BIRTHDAY</h2>
          <span className="bg-white h-[2px] w-20 block"></span>
        </div>
      </div>
      <div className="flex flex-col gap-10 w-[544px]">
        <h1 className="text-7xl font-bona-nova ">
          <span className="border-b-2">H</span>ELLO
        </h1>
        <h2 className="font-serif text-xl">
          My name is Bondarenko. Iryna Bondarenko. I’m a software developer...
          under cover. My first language? JavaScript. And my first words?
          “Hello, world!”. I come equipped with skills like safeguarding
          commercial secrets, mastering team dynamics, and the art of meaningful
          conversation. All of this, honed through a keen eye for detail,
          relentless motivation, and a knack for quick adaptation. I am
          dedicated to leveraging my skills to drive innovative solutions and
          contribute to impactful projects. <br />
          Thank you for visiting my portfolio!
        </h2>
        <h3 className="text-xl font-dancing-script text-center">
          P.S. Her Software Development Secret Service
        </h3>
      </div>
    </section>
  );
};
