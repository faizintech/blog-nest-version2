import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import MobileNav from "./MobileNav";
import { useState, useEffect, use } from "react";

const Header = ({
  onCreateHandelClick,
  onHandelHamburger,
  Hamburger,
  setCategory,
  activeToggle,
  setToggle,
}) => {
  const onHandelToggle = () => {
    if (activeToggle === "light") {
      setToggle("dark");
    } else {
      setToggle("light");
    }
  };

  const onClickLogoHandel = () => {
    window.location.reload();
  };

  return (
    <header>
      {/* hamburger */}
      <MobileNav Hamburger={Hamburger} onHandelHamburger={onHandelHamburger} />

      <nav className={Hamburger === "open" ? "active" : ""}>
        <p className="your-name" onClick={onClickLogoHandel}>
          Blog-Nest
        </p>
        <menu>
          <ul>
            <li>
              <a
                href="#Blog"
                onClick={(e) => {
                  setCategory("All"), onCreateHandelClick(e.target.innerText);
                }}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#Create Blog"
                onClick={(e) => onCreateHandelClick(e.target.innerText)}
              >
                Create Blog
              </a>
            </li>
            <li>
              <div className="dropdown">
                <p>Cateogaries</p>
                <ul
                  className="dropdonw-wrapper"
                  onClick={(e) => setCategory(e.target.innerText)}
                >
                  <li>Design</li>
                  <li>Research</li>
                  <li>Tech</li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <div
                className={`toggleMenue ${activeToggle === "dark" && "active"}`}
                onClick={onHandelToggle}
              >
                <span className="light">
                  <CiLight />
                </span>

                <span className="moon">
                  <IoMoonOutline />
                </span>

                <div className="circle"></div>
              </div>
            </li>
            <li></li>
          </ul>
        </menu>
      </nav>
      <div className="container">
        <h1 className="hero_heading">THE BLOG NEST</h1>
      </div>
    </header>
  );
};
export default Header;
