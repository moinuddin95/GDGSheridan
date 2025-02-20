import Main from "../../components/Main/Main";
import About from "../../components/About/About";
import Events from "../../components/Events/Events";
import useBackgroundTransition from "../../hooks/useBackgroundTransition";
import "./Home.css";
export default function Home() {
  useBackgroundTransition();
  return (
    <div id="home">
      <Main />
      <About />
      <Events />
    </div>
  );
}
