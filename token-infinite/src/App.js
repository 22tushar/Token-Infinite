
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Homepage from "./pages/homepage/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { useContext } from "react";
import { Context } from "./context/Context";
import Footer from "./components/footer/Footer";



function App() {
  const {user} = useContext(Context);
  return (
    <Router>

      {/* Gestion des routes  */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Register />} />
      </Routes>

    </Router>
  );
}

export default App;
