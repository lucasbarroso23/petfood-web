import LogoWHite from "../../assets/logo-white.png";
import Logo from "../../assets/logo.png";

import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import "./styles.css";

const Header = ({ whiteVersion, hideCart }) => {
  const { cart } = useSelector(state => state.shop);

  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };
  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <Link to="/">
          <img src={whiteVersion ? LogoWHite : Logo} alt="" />
        </Link>        
      </header>
      {!hideCart && (
        <button
          onClick={() => openDrawer()}
          className="btn btn-secondary cart-button"
        >
          <span className="mdi mdi-cart"></span> {cart.length} Ítens
        </button>
      )}
    </div>
  );
};

export default Header;
