import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import './App.css';
import About from "./components/About/About";
import Events from "./components/Events/Events";
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Events />
    </div>
  );
}

export default App;
