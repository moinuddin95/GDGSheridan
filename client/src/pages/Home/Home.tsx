import Main from "../../components/Main/Main";
import About from "../../components/About/About";
import Events from "../../components/Events/Events";
import useBackgroundTransition from "../../hooks/useBackgroundTransition";
import Navbar from "../../components/Navbar/Navbar";
import HomeOptions from "../../components/UI/NavbarOptions/HomeOptions/HomeOptions";
import "./Home.css";
export default function Home() {
  useBackgroundTransition();
  return (
    <div id="home">
      <Navbar>
          <HomeOptions />
      </Navbar>
      <Main />
      <About />
      <Events />
    </div>
  );
}
