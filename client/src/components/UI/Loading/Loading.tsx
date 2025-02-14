import "./Loading.css";
import useLoading from "../../../hooks/useLoading";
import { Navigate } from "react-router-dom";

function Loading() {
  const isLoading = useLoading();
  return isLoading ? (
    <div id="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <Navigate to="/error" />
  );
}

export default Loading;
