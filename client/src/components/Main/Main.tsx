import "./Main.css";
import homeanimation from "../../assets/GDSC23_IG_Sticker_01_v01.gif";
import discord from "../../assets/discord.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import Socials from "../Socials/Socials";

export default function Main() {
  const handleScrollToComponent = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <div className="main">
        <div>
          <h1>Google Developers Group: Sheridan College</h1>
          <h3>
            Google Developer Group (GDG) is a Google Developers program for
            university students to learn web, mobile, and google technologies in
            a peer-to-peer learning environment.
          </h3>
          <button onClick={() => handleScrollToComponent('Events')}>Check out our Events!</button>
        </div>

        <div>
          <img src={homeanimation} alt="animatoin" />
          <Socials />
        </div>
      </div>
    </main>
  );
}
