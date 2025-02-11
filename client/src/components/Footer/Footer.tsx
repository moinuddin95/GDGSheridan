import "./Footer.css";
import discord from "../../assets/discord.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import Socials from "../UI/Socials/Socials";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>&copy; 2024 All rights reserved</h3>
        <h3>Contact</h3>
        <Socials />
      </nav>
    </footer>
  );
};

export default Footer;
