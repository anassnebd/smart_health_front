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

function App() {
  return (
    <Router> 
      <div>
        <Routes>
          <Route index element={<DashboardAdmin />} />
          <Route path="/doctor/login" element={<LoginDoctor />} />
          <Route path="/kine/login" element={<LoginKine />} />
          <Route path="/infirmier/login" element={<LoginInfirmier />} />
          <Route path="/patient/login" element={<LoginPatient />} />
          <Route path="/dieteticien/login" element={<LoginDieteticien />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
