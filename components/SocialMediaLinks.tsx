import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const SocialMediaLinks = () => {
  return (
    <ul className="flex gap-4">
      <li className="w-8 h-8 2xl:w-9 2xl:h-9">
        <a
          href="https://www.linkedin.com/in/iryna-bondarenko-bd/"
          className=" hover:shadow-sm inline-block hover:shadow-white hover:text-bgColor focus:bg-white focus:shadow-white focus:text-bgColor hover:bg-white transition-all duration-300 rounded-sm"
          target="blank"
          rel="noopener noreferrer nofollow"
        >
          <IoLogoLinkedin className="w-8 h-8 2xl:w-9 2xl:h-9 fill-current" />
        </a>
      </li>
      <li className="w-8 h-8 2xl:w-9 2xl:h-9">
        <a
          href="https://github.com/IrynaBondarenko7"
          className=" hover:shadow-sm inline-block hover:shadow-white hover:text-bgColor focus:bg-white focus:shadow-white focus:text-bgColor hover:bg-white transition-all duration-300 rounded-sm"
          target="blank"
          rel="noopener noreferrer nofollow"
        >
          <FaSquareGithub className="w-8 h-8 2xl:w-9 2xl:h-9 fill-current" />
        </a>
      </li>
      <li className="w-8 h-8 2xl:w-9 2xl:h-9 relative email-link transition-all duration-300">
        <a
          href="mailto:ira.bondarenko@ukr.net"
          className="hover:shadow-sm inline-block hover:shadow-white hover:text-bgColor focus:bg-white focus:shadow-white focus:text-bgColor hover:bg-white transition-all duration-300 rounded-sm"
          target="blank"
          rel="noopener noreferrer nofollow"
        >
          <MdEmail className="w-8 h-8  2xl:w-9 2xl:h-9 fill-current" />
        </a>
        <p className="bg-white text-black text-xs rounded-sm w-36 text-center absolute left-[-47px] hidden email-text bottom-[-22px]">
          ira.bondarenko@ukr.net
        </p>
      </li>
    </ul>
  );
};
