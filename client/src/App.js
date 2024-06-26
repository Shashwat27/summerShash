
import './App.css';
import CustomNavbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';

function App() {
  return (
    <Router>
    <div>
      <CustomNavbar />
      <Home/>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
