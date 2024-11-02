import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <Link
      to="/"
      className="font-bona-nova text-2xl hover:shadow-sm inline-block hover:shadow-white rounded-lg px-2 transition-all duration-300"
    >
      BOND
    </Link>
  );
};
