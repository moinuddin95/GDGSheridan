import Dashboard from "./Dashboard";
import Footer from './'

function Logout(){
    const handleLogout = (): boolean => {
        const fetchUser = async () => {
          let output = false;
          const response = fetch("/api/auth/google/logout")
            .then((res) => {
              if (res.status != 200) {
                console.error("error inside");
              }
            })
            .catch((err) => console.error("Errorrorororor: " + err));
          console.log(response);
          return output;
        };
        let output: boolean = false;
        fetchUser().then((res) => (output = res));
        return output;
      };
    return ( 
        <Dashboard />
    )
}

export default Logout;