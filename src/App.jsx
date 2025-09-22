import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Login from "./components/Login";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <AppRoutes />
        <Login />
      </div>
    </Router>
  );
};

export default App;
