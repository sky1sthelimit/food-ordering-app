import { useEffect, useState } from "react";
import { LOGO_URL2 } from "../utils/constants";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  const [loadingLogo, setLoadingLogo] = useState(true);

  const handleLogoLoad = () => {
    setLoadingLogo(false);
  };

  useEffect(() => {
    setLoadingLogo(true);
  }, []); // Reset loading state when the component mounts

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL2} alt="Logo" />
      </div>

      <div className="nav-items-container">
        <ul className="nav-items">
          <li>
            {" "}
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            {" "}
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <FaCartPlus cursor="pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
