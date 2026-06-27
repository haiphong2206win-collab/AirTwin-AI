import { NavLink } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
// test data web tĩnh
import { patients } from "../data/doctorData.js";

export default function DoctorPatients() {
    const getRecoveryClass = (status) => {
        if (status === "Đang cải thiện") return "status-pill--good";
        if (status === "Cần theo dõi" || status === "Cần chú ý") return "status-pill--warning";
        if (status === "Nguy cơ cao") return "status-pill--danger";
        if (status === "Ổn định") return "status-pill--info";
        return "status-pill--info";
    };

    const getRiskLabel = (riskLevel) => {
        if (riskLevel === "high") return "Cao";
        if (riskLevel === "medium") return "Trung bình";
        if (riskLevel === "low") return "Thấp";
        return "Chưa rõ";
    };

    const getRiskClass = (riskLevel) => {
        if (riskLevel === "high") return "status-pill--danger";
        if (riskLevel === "medium") return "status-pill--warning";
        if (riskLevel === "low") return "status-pill--good";
        return "status-pill--info";
    };

    return (
        <DashboardLayout
            role="doctor"
            title="Danh sách bệnh nhân"
            subtitle="Theo dõi trạng thái phục hồi của các bệnh nhân sau xuất viện."
        >
            <section className="dashboard-panel">
                <div className="panel-header">
                    <div>
                        <h2>Bệnh nhân đang theo dõi</h2>
                        <p>Danh sách mô phỏng cho demo AirTwin AI.</p>
                    </div>
                </div>

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

                            <span className={`status-pill ${getRecoveryClass(patient.status)}`}>
                                {patient.status}
                            </span>

                            <span className={`status-pill ${getRiskClass(patient.riskLevel)}`}>
                                {getRiskLabel(patient.riskLevel)}
                            </span>

                            <NavLink className="text-link" to="/doctor/patient-detail">
                                Xem chi tiết
                            </NavLink>
                        </div>
                    ))}
                </div>
            </section>
        </DashboardLayout>
    );
}