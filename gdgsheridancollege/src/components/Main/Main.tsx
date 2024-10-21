import "./Main.css";
import homeanimation from "../../assets/GDSC23_IG_Sticker_01_v01.gif";

export default function Main() {
  return (
    <main>
      <div className="main">
        <div>
          <h1>Google Developers Group: Sheridan College</h1>
          <h3>
            Google Developer Group (GDG) is a Google Developers program for
            university students to learn web, mobile, and google technologies in
            a peer-to-peer learning environment.
          </h3>
          <button>Check out our Events!</button>
        </div>
        <img src={homeanimation} alt="animatoin" />
      </div>
    </main>
  );
}
