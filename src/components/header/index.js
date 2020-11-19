import LogoWHite from "../../assets/logo-white.png";
import Logo from "../../assets/logo.png";

const Header = ({ whiteVersion }) => {
  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <img src={whiteVersion ? LogoWHite : Logo} alt="" />
      </header>
    </div>
  );
};

export default Header;
