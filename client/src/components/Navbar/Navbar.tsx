import "./Navbar.css";
import redirect from "../../assets/redirect.png";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { handleScrollToComponent } from "../../utils/scrollUtils";
const Navbar = () => {
  const [visibility, setVisibility] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    //if you scroll down, scrollY will be greater than the previous scrollY
    //if you scroll up, scrollY will be less than the previous scrollY
    if (window.scrollY > scroll) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className={`${visibility ? "show" : ""}`}>
      <menu>
        <nav>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <div>
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
        </nav>
      </menu>
      <div className="sidebar">
        <button id="tabs">
          <span></span>
          <span></span>
        </button>

        <div className="tabs">
          <button onClick={() => handleScrollToComponent("About")}>
            <span>About</span>
          </button>
          <button onClick={() => handleScrollToComponent("Events")}>
            <span>Events</span>
          </button>
          <button>
            <span>Join</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
