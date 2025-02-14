import "./Loading.css";
import useLoading from "../../../hooks/useLoading";
import { Navigate } from "react-router-dom";

function Loading() {
  const isLoading = useLoading();
  return isLoading ? (
    <div id="loading">
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    </div>
  ) : (
    <Navigate to="/error" />
  );
}

export default Loading;
