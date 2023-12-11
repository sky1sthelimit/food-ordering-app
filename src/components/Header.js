import { LOGO_URL, LOGO_URL2 } from "../utils/constants";

const Logo = () => {
  return <img className="logo" src={LOGO_URL2}></img>;
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Logo />
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
