import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import LoginDoctor from './components/Doctor/LoginDoctor';
import LoginDieteticien from './components/Dieteticien/LoginDieteticien';
import LoginInfirmier from './components/Infirmier/LoginInfirmier';
import LoginKine from './components/Kine/LoginKine';
import LoginPatient from './components/Patient/LoginPatient';
import LoginAdmin from './components/Admin/LoginAdmin';
import DashboardAdmin from './components/Admin/Dashboard';
import ProfilsAdmin from './components/Admin/Profils';
import DashboardDoctor from './components/Doctor/Dashboard';
import Community from './components/Community';

function App() {
  return (
    <Router> 
      <div>
        <Routes>
          <Route index element={<Community />} />
          <Route path="/doctor/login" element={<LoginDoctor />} />
          <Route path="/doctor/dashboard" element={<DashboardDoctor />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/kine/login" element={<LoginKine />} />
          <Route path="/infirmier/login" element={<LoginInfirmier />} />
          <Route path="/patient/login" element={<LoginPatient />} />
          <Route path="/dieteticien/login" element={<LoginDieteticien />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/profils" element={<ProfilsAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
