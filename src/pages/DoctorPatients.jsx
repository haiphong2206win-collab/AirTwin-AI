import { NavLink } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";
// test data web tĩnh
import { patients } from "../data/doctorData.js";

export default function DoctorPatients() {
    const getRecoveryType = (status) => {
        if (status === "Đang cải thiện") return "good";
        if (status === "Cần theo dõi" || status === "Cần chú ý") return "warning";
        if (status === "Nguy cơ cao") return "danger";
        if (status === "Ổn định") return "info";
        return "info";
    };

    const getRiskLabel = (riskLevel) => {
        if (riskLevel === "high") return "Cao";
        if (riskLevel === "medium") return "Trung bình";
        if (riskLevel === "low") return "Thấp";
        return "Chưa rõ";
    };

    const getRiskType = (riskLevel) => {
        if (riskLevel === "high") return "danger";
        if (riskLevel === "medium") return "warning";
        if (riskLevel === "low") return "good";
        return "info";
    };

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
                <div className="patient-table">
                    <div className="patient-table__row patient-table__row--head">
                        <span>Bệnh nhân</span>
                        <span>Phục hồi</span>
                        <span>Mức chú ý</span>
                        <span>Hành động</span>
                    </div>

                    {patients.map((patient) => (
                        <div className="patient-table__row" key={patient.id}>
                            <strong>{patient.name}</strong>

                            <StatusPill type={getRecoveryType(patient.status)}>
                                {patient.status}
                            </StatusPill>

                            <StatusPill type={getRiskType(patient.riskLevel)}>
                                {getRiskLabel(patient.riskLevel)}
                            </StatusPill>

                            <NavLink className="text-link" to="/doctor/patient-detail">
                                Xem chi tiết
                            </NavLink>
                        </div>
                    ))}
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}