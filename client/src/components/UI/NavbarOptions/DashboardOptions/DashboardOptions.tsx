import redirect from "../../../../assets/redirect.png";
import "./DashboardOptions.css";
import { handleScrollToComponent } from "../../../../utils/scrollUtils";
function DashboardOptions() {
  return (
    <div className="navbar">
      <button onClick={() => handleScrollToComponent("About")}>
        <span>Logout</span>
      </button>
      <button onClick={() => handleScrollToComponent("Events")}>
        <span>Home</span>
      </button>
    </div>
  );
}

export default DashboardOptions;
