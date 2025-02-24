import Dashboard from "./Dashboard/Dashboard";
import axios from "axios";

function Logout() {
  const handleLogout = (): boolean => {
    const fetchUser = async () => {
      axios
        .post("/api/auth/logout")
        .then((res) => {
          if (res.status != 200) {
            console.error("error inside");
            return false;
          }
        })
        .catch((err) => {
          console.error("Errorrorororor: " + err);
          return false;
        });
      return true;
    };
    fetchUser().then((res) => {
      return res;
    });
    return false;
  };
  if (!handleLogout()) console.error("Can not logg out");
  return <Dashboard />;
}

export default Logout;
