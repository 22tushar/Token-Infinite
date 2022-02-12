
import './App.css';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;