import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";
import PatientTable from "../components/doctor/PatientTable.jsx";
// test data web tĩnh
import { patients } from "../data/doctorData.js";

export default function DoctorPatients() {
    return (
        <DashboardLayout
            role="doctor"
            title="Danh sách bệnh nhân"
            subtitle="Theo dõi trạng thái phục hồi của các bệnh nhân sau xuất viện."
        >
            <DashboardPanel
                title="Bệnh nhân đang theo dõi"
                subtitle="Danh sách mô phỏng cho demo AirTwin AI."
            >
                <PatientTable patients={patients} />
            </DashboardPanel>
        </DashboardLayout>
    );
}