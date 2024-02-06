import Logo from "../assets/ForgeRp.svg";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Navbar({page}) {
  return (
    <div className={`Navbar Navbar-${page}`}>
      <div className="Logo">

        <div className="Home">
          <Link to={"/"} style={{ textDecoration: "none" }} className="Home">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

      </div>

      <div className="Links">
        <div className="Home">
          <Link to={"/"} style={{ textDecoration: "none" }} >
            Accueil
          </Link>
        </div>

        <div className="Characters">
          <Link
            to={"/characters"}
            style={{ textDecoration: "none" }}
          >
            Mes personnages
          </Link>
        </div>

        <div className="About">
          <Link
            to={"/about"}
            style={{ textDecoration: "none" }}
          >
            A propos
          </Link>
        </div>
      </div>
    </div>
  );
}
Navbar.propTypes = {
    page: PropTypes.any.isRequired,
  };

export default Navbar;
