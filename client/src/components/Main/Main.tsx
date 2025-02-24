import "./Main.css";
import homeanimation from "../../assets/GDSC23_IG_Sticker_01_v01.gif";
import Socials from "../UI/Socials/Socials";
import { Typewriter } from "react-simple-typewriter";
import { handleScrollToComponent } from "../../utils/scrollUtils";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    const animateElements = document.querySelectorAll(".slideAnimate");
    for (let i = 0; i < animateElements.length; i++) {
      setTimeout(() => {
        animateElements.item(i).classList.add("show");
      }, i * 500);
    }
    setTimeout(() => {
      document.querySelector("#title > h1 > span")?.classList.add("show");
    }, 5000);
  }, []);
  return (
    <main>
      <div id="main-content">
        <div id="title">
          <h1 className="slideAnimate">
            Google Developers Group:
            <Typewriter
              words={["Sheridan College"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
        </div>
        <h3 className="slideAnimate">
          Google Developer Group (GDG) is a Google Developers program for
          university students to learn web, mobile, and google technologies in a
          peer-to-peer learning environment.
        </h3>
        <button
          className="slideAnimate"
          onClick={() => handleScrollToComponent("Events")}
        >
          Check out our Events!
        </button>
      </div>

      <div id="main-animation">
        <img src={homeanimation} alt="animatoin" className="slideAnimate"/>
        <Socials className="slideAnimate"/>
      </div>
    </main>
  );
}
