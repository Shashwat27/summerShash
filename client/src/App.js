
import './App.css';
import CustomNavbar from './components/pages/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/pages/register';
import Login from './components/pages/login';
import Home from './components/pages/home';
import Profile from './components/pages/profile';

function App() {
  return (
    <Router>
    <div>
      <CustomNavbar />
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
