import "./App.css";

<<<<<<< HEAD
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//routes
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

>>>>>>> ea5d899a4 (Your commit message)
import { Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Compare from "./routes/Compare";
import Timeline from "./routes/Timeline";

<<<<<<< HEAD
//import icons
=======
>>>>>>> ea5d899a4 (Your commit message)
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar/Navbar";
import dashboard from "./routes/Dashboard";

function App() {
  return (
    <div className="AppContainer">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
