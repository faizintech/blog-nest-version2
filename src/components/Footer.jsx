import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className="certified">
          <FaRegCopyright /> 2023
        </p>
        <menu>
          {" "}
          <ul>
            <li>
              <a href="#">twitter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </menu>
      </div>
    </footer>
  );
};
export default Footer;
