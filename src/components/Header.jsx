import { BurgerMenu } from "./BurgerMenu";
import { Logo } from "./Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Header = () => {
  return (
    <header className="py-5">
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="flex gap-10 items-center">
          <SocialMediaLinks />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
