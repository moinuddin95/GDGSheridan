import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/Footer";

export default function Home(){
    return (<>
        <Main />
        <About />
        <Events />
        <Footer />
    </>);
}