import "./Navbar.css";
import redirect from "../../assets/redirect.png";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScrollToComponent = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${visibility ? "show" : ""}`}>
      <nav>
        
        <a href="/"><img src={logo} alt="logo" /></a>
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
    </header>
  );
};

export default Navbar;
