import { NavLink } from "react-router";
import AppLogo from "../components/common/AppLogo.jsx";

export default function DashboardLayout({ role, title, subtitle, children }) {

    /*layout nhận dữ liệu từ trang khác truyền vào. */
    const isPatient = role === "patient";
    const navClass = ({ isActive }) =>
        isActive ? "dashboard-nav__item active" : "dashboard-nav__item";
    return (
        <main className="dashboard-layout">
            <aside className="dashboard-sidebar">
                <AppLogo />

                <nav className="dashboard-nav">
                    {isPatient ? (
                        <>
                            <button className="dashboard-nav__item active" type="button">
                                Tổng quan phục hồi
                            </button>

                            <button className="dashboard-nav__item" type="button">
                                Nhiệm vụ hôm nay
                            </button>

                            <button className="dashboard-nav__item" type="button">
                                Ghi âm tiếng ho
                            </button>

                            <button className="dashboard-nav__item" type="button">
                                Câu hỏi sức khỏe
                            </button>

                            <button className="dashboard-nav__item" type="button">
                                AI Copilot
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/doctor/overview" className={navClass}>
                                Tổng quan bệnh nhân
                            </NavLink>

                            <NavLink to="/doctor/patients" className={navClass}>
                                Danh sách bệnh nhân
                            </NavLink>

                            <NavLink to="/doctor/alerts" className={navClass}>
                                Danh sách cảnh báo
                            </NavLink>

                            <NavLink to="/doctor/patient-detail" className={navClass}>
                                Chi tiết bệnh nhân
                            </NavLink>

                            <NavLink to="/doctor/reports" className={navClass}>
                                Báo cáo AI
                            </NavLink>
                        </>
                    )}
                </nav>
            </aside>

            <section className="dashboard-main">
                <header className="dashboard-topbar">
                    <div>
                        <p className="eyebrow">
                            {isPatient ? "Patient Portal" : "Doctor Dashboard"}
                        </p>

                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>

                    <div className="dashboard-user">
                        <span>{isPatient ? "Vai trò bệnh nhân" : "Vai trò bác sĩ"}</span>
                        <strong>{isPatient ? "Dương Ngọc Quang " : "Dr. Dương Phong"}</strong>
                    </div>
                </header>

                <div className="dashboard-content">{children}</div>
                {/* quan trọng children là phần nội dung riêng từng trang 
DashboardLayout = khung chung
PatientOverview = nội dung bên trong khung
DoctorOverview = nội dung bên trong khung
                */}
            </section>
        </main>
    );
}