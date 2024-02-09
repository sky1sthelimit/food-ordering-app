import { useEffect, useState } from "react";
import { LOGO_URL2 } from "../utils/constants";
import { Link } from "react-router-dom";
import { FaGlobe, FaCartPlus } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loadingLogo, setLoadingLogo] = useState(true);
  const isOnline = useOnlineStatus();

  const handleLogoLoad = () => {
    setLoadingLogo(false);
  };

  useEffect(() => {
    setLoadingLogo(true);
  }, []); // Reset loading state when the component mounts

  return (
    <div className="flex justify-between bg-pink-100 shadow-md mb-2">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL2} alt="Logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 justify-between">
          <li className="px-4">
            Internet Connectivity :{" "}
            {isOnline ? <FaGlobe color="green" /> : <FaGlobe color="red" />}
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">
            <FaCartPlus cursor="pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
