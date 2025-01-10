import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import './App.css';
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
