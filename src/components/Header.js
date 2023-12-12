import { useEffect, useState } from "react";
import { LOGO_URL2 } from "../utils/constants";
import ShimmerLogo from "./ShimmerLogo";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
