import "./Navbar.css";
import redirect from '../../assets/redirect.png'
import logo from "../../assets/logo.png";
import { useState, useEffect} from "react";
const Navbar = () => {
  
  const [visibility, setVisibility] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > scroll) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
    setScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <header className = {`${visibility ? "show" : ""}`}>
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
