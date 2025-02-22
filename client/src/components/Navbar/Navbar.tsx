import "./Navbar.css";
import redirect from "../../assets/redirect.png";
import logo from "../../assets/logo.png";
import Sidebar from "../UI/Sidebar/Sidebar";
import { handleScrollToComponent } from "../../utils/scrollUtils";
import useScroll from "../../hooks/useNavbarScroll";
const Navbar = () => {
  const { menuVisibility } = useScroll();

  return (
    <menu className={`${menuVisibility ? "show" : ""}`}>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="navbar">
        <button onClick={() => handleScrollToComponent("About")}>
          <span>About</span>
        </button>
        <button onClick={() => handleScrollToComponent("Events")}>
          <span>Events</span>
        </button>
        <button id="join">
          <span>Join</span>
          <img src={redirect} />
        </button>
      </div>
      <Sidebar />
    </menu>
  );
};

export default Navbar;
