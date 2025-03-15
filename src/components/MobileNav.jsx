import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const MobileNav = ({ Hamburger, onHandelHamburger }) => {
  return (
    <div className="mobile-nav">
      <p className="your-name">Blog-Nest</p>
      <div className="hamburger" onClick={onHandelHamburger}>
        {Hamburger === "open" ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </div>
    </div>
  );
};
export default MobileNav;
