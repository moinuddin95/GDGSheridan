import "./Footer.css";
import Socials from "../UI/Socials/Socials";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>&copy; 2024 All rights reserved</h3>
        <h3>Contact</h3>
        <Socials className=""/>
      </nav>
    </footer>
  );
};

export default Footer;
