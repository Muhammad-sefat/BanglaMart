import { Outlet } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen md:flex">
        <Admin />
        <div className="flex-1 md:ml-10">
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
