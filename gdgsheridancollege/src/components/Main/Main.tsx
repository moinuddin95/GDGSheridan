import "./Main.css";
import homeanimation from "../../assets/GDSC23_IG_Sticker_01_v01.gif";
import discord from "../../assets/discord.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

export default function Main() {
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
          <button>Check out our Events!</button>
        </div>

        <div>
          <img src={homeanimation} alt="animatoin" />
          <div>
            <a href="https://www.linkedin.com/company/gdgsheridancollege">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://discord.gg/3Z8QJwQ">
              <img src={discord} alt="discord" />
            </a>
            <a href="https://www.instagram.com/gdgsheridancollege/">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
