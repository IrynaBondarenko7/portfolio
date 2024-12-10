import { technologies } from "@/data/technologies";

export const Technologies = () => {
  return (
    <ul className="flex justify-between items-center my-4 xl:w-[900px] 2xl:w-[1200px] mx-auto">
      {technologies.map((technology) => {
        return (
          <li
            key={technology.name}
            className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 relative technology-item cursor-pointer"
          >
            {technology.component}
            <h2 className="absolute text-white top-[-17px] xl:top-[-19px] left-1/2  -translate-x-1/2 text-xs xl:text-sm technology-text">
              {technology.name}
            </h2>
          </li>
        );
      })}
    </ul>
  );
};
