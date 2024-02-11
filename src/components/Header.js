import { useEffect, useState } from "react";
import { LOGO_URL2 } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus, FaCircle } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loadingLogo, setLoadingLogo] = useState(true);
  const isOnline = useOnlineStatus();
  const navigate = useNavigate();

  const handleLogoLoad = () => {
    setLoadingLogo(false);
  };

  useEffect(() => {
    setLoadingLogo(true);
  }, []); // Reset loading state when the component mounts

  const navigateToHome = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex justify-between bg-pink-100 shadow-md mb-2 sm:bg-green-100 lg:bg-blue-100">
      <div className="logo-container">
        <img
          className="w-40 cursor-pointer"
          src={LOGO_URL2}
          alt="Logo"
          onClick={navigateToHome}
        />
      </div>

      <div className="flex items-center">
        <div className="flex justify-between items-center ">
          Internet Connectivity :{"  "}
        </div>
        <div className="mx-2">
          {isOnline ? <FaCircle color="green" /> : <FaCircle color="red" />}
        </div>

        <ul className="flex p-4 m-4 justify-between">
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
