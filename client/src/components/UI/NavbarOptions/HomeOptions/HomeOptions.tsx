import redirect from "../../../../assets/redirect.png";
import "./HomeOptions.css";
import { handleScrollToComponent } from "../../../../utils/scrollUtils";
function HomeOptions() {
  return (
    <div className="navbar">
      <button onClick={() => handleScrollToComponent("About")}>
        <span>About</span>
      </button>
      <button onClick={() => handleScrollToComponent("Events")}>
        <span>Events</span>
      </button>
      <button id="join">
        <span>Join</span>
        <img src={redirect} />
      </button>
    </div>
  );
}

export default HomeOptions;
