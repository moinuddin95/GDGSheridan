import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/Footer";
import HomeOptions from "../components/UI/NavbarOptions/HomeOptions/HomeOptions";

export default function Home(){
    return (<>
        <Navbar>
            <HomeOptions />
        </Navbar>
        <Main />
        <About />
        <Events />
    </>);
}