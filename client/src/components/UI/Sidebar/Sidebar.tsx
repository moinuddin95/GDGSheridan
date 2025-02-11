import { handleScrollToComponent } from "../../../utils/scrollUtils";
import useSidebarVisibility from "../../../hooks/useSidebarVisibility";
import "./Sidebar.css"

const Sidebar = () => {
  const {tabsAnimation, sidebarVisibility} = useSidebarVisibility();
  return (
    <>
      <button
        id="tabs"
        className="open"
        onClick={tabsAnimation}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={"sidebar " + `${sidebarVisibility ? "show" : ""}`}>
        <div>
          <button onClick={() => handleScrollToComponent("About")}>
            <span>About</span>
          </button>
          <button onClick={() => handleScrollToComponent("Events")}>
            <span>Events</span>
          </button>
          <button>
            <span>Join</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;