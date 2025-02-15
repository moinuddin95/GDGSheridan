import "./Navbar.css";
import logo from "../../assets/logo.png";
import Sidebar from "../UI/Sidebar/Sidebar";
import useScroll from "../../hooks/useScroll";
import HomeOptions from "../UI/NavbarOptions/HomeOptions/HomeOptions";
import NavbarProps from "../../interfaces/Props/NavbarProps";
const Navbar = ({ children }: NavbarProps) => {
  const { menuVisibility } = useScroll();
  return (
    <menu className={`${menuVisibility ? "show" : ""}`}>
      <a href="/">
      <img src={logo} alt="logo" />
      </a>
      {children}
      <Sidebar />
    </menu>
  );
};

export default Navbar;
