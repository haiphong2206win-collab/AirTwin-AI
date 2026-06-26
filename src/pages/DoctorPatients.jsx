import { NavLink } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout.jsx";

export default function DoctorPatients() {
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

                    <div className="patient-table__row">
                        <strong>Nguyễn Minh Anh</strong>
                        <span className="status-pill status-pill--good">Đang cải thiện</span>
                        <span className="status-pill status-pill--warning">Trung bình</span>
                        <NavLink className="text-link" to="/doctor/patient-detail">
                            Xem chi tiết
                        </NavLink>
                    </div>

                    <div className="patient-table__row">
                        <strong>Trần Quốc Huy</strong>
                        <span className="status-pill status-pill--warning">Cần chú ý</span>
                        <span className="status-pill status-pill--danger">Cao</span>
                        <NavLink className="text-link" to="/doctor/patient-detail">
                            Xem chi tiết
                        </NavLink>
                    </div>

                    <div className="patient-table__row">
                        <strong>Lê Thảo Vy</strong>
                        <span className="status-pill status-pill--info">Ổn định</span>
                        <span className="status-pill status-pill--good">Thấp</span>
                        <NavLink className="text-link" to="/doctor/patient-detail">
                            Xem chi tiết
                        </NavLink>
                    </div>

                    <div className="patient-table__row">
                        <strong>Phạm Gia Bảo</strong>
                        <span className="status-pill status-pill--good">Đang cải thiện</span>
                        <span className="status-pill status-pill--good">Thấp</span>
                        <NavLink className="text-link" to="/doctor/patient-detail">
                            Xem chi tiết
                        </NavLink>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
}