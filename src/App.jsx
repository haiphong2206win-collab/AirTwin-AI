import { Navigate, Route, Routes } from "react-router";
/* chuyển trang */
import AuthPage from "./pages/AuthPage.jsx";
import PatientOverview from "./pages/PatientOverview.jsx";
import DoctorOverview from "./pages/DoctorOverview.jsx";
import DoctorPatients from "./pages/DoctorPatients.jsx";
import DoctorAlerts from "./pages/DoctorAlerts.jsx";
import DoctorPatientDetail from "./pages/DoctorPatientDetail.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/patient/overview" element={<PatientOverview />} />
      <Route path="/doctor/overview" element={<DoctorOverview />} />
      <Route path="/doctor/patients" element={<DoctorPatients />} />
      <Route path="/doctor/alerts" element={<DoctorAlerts />} />
      <Route path="/doctor/patient-detail" element={<DoctorPatientDetail />} />

    </Routes>
  );
}