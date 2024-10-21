import "./Navbar.css";
import redirect from '../../assets/redirect.png'
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <div>
          <a href="">About</a>
          <a href="">Events</a>
          <a href="" id="join">
            <button>
              <span>Join</span>
              <img src={redirect}/>
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
