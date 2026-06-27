import { Navigate, Route, Routes } from "react-router";
/* chuyển trang */
import AuthPage from "./pages/AuthPage.jsx";

import PatientOverview from "./pages/PatientOverview.jsx";
import PatientTasks from "./pages/PatientTasks.jsx";
import CoughRecording from "./pages/CoughRecording.jsx";
import HealthQuestions from "./pages/HealthQuestions.jsx";
import EnvironmentInfo from "./pages/EnvironmentInfo.jsx";
import AiCopilot from "./pages/AiCopilot.jsx";
import RecoveryHistory from "./pages/RecoveryHistory.jsx";

import DoctorOverview from "./pages/DoctorOverview.jsx";
import DoctorPatients from "./pages/DoctorPatients.jsx";
import DoctorAlerts from "./pages/DoctorAlerts.jsx";
import DoctorPatientDetail from "./pages/DoctorPatientDetail.jsx";
import DoctorReports from "./pages/DoctorReports.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<AuthPage />} />

      <Route path="/patient/overview" element={<PatientOverview />} />
      <Route path="/patient/tasks" element={<PatientTasks />} />
      <Route path="/patient/cough-recording" element={<CoughRecording />} />
      <Route path="/patient/health-questions" element={<HealthQuestions />} />
      <Route path="/patient/environment" element={<EnvironmentInfo />} />
      <Route path="/patient/ai-copilot" element={<AiCopilot />} />
      <Route path="/patient/recovery-history" element={<RecoveryHistory />} />

      <Route path="/doctor/overview" element={<DoctorOverview />} />
      <Route path="/doctor/patients" element={<DoctorPatients />} />
      <Route path="/doctor/alerts" element={<DoctorAlerts />} />
      <Route path="/doctor/patient-detail" element={<DoctorPatientDetail />} />
      <Route path="/doctor/reports" element={<DoctorReports />} />
    </Routes>
  );
}