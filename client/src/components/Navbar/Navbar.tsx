import "./Navbar.css";
import redirect from "../../assets/redirect.png";
import logo from "../../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { handleScrollToComponent } from "../../utils/scrollUtils";
const Navbar = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [tabsVisibility, setTabsVisibility] = useState(false);
  const [scroll, setScroll] = useState(0);
  const tabsButton = useRef<HTMLButtonElement>(null);
  const tabsAnimation = () => {
    tabsButton.current?.classList.toggle("close");
    tabsButton.current?.classList.toggle("open");
    setTabsVisibility(!tabsVisibility);
  };
  const handleScroll = () => {
    //if you scroll down, scrollY will be greater than the previous scrollY
    //if you scroll up, scrollY will be less than the previous scrollY
    setMenuVisibility(window.scrollY > scroll);
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <menu className={`${menuVisibility ? "show" : ""}`}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className='navbar'>
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
        <button
          id="tabs"
          className="open"
          ref={tabsButton}
          onClick={tabsAnimation}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={"sidebar "+ `${tabsVisibility ? "show" : ""}`}>
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
    </menu>
  );
};

export default Navbar;
