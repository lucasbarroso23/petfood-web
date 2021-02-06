import LogoWHite from "../../assets/logo-white.png";
import Logo from "../../assets/logo.png";

import './styles.css';

const Header = ({ whiteVersion }) => {
  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <img src={whiteVersion ? LogoWHite : Logo} alt="" />
      </header>
      <button className="btn btn-secondary cart-button">
        <span className="mdi mdi-cart"></span> 2 Ítens
      </button>
    </div>
  );
};

export default Header;
