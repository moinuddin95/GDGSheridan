import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo"/>
        <div>
          <a href="">About</a>
          <a href="">Events</a>
          <a href="">Join</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
