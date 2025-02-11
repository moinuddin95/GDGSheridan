import './Socials.css';

import discord from "../../../assets/discord.png";
import linkedin from "../../../assets/linkedin.png";
import instagram from "../../../assets/instagram.png";

function Socials() {
  return (
    <div className="socials">
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
  );
}

export default Socials;
