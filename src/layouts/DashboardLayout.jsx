import { NavLink } from "react-router";
// NavLink dùng để chuyển trang trong React, giống link nhưng không reload lại web.
import AppLogo from "../components/common/AppLogo.jsx";

export default function DashboardLayout({ role, title, subtitle, userName, children }) {
    /* layout nhận dữ liệu từ trang khác truyền vào. */
    const isPatient = role === "patient";

    const displayName = userName || (isPatient ? "Dương Ngọc Quang" : "Dr. Dương Phong");

    // khỏi phải viết lặp className dài cho từng menu.
    const navClass = ({ isActive }) =>
        isActive ? "dashboard-nav__item active" : "dashboard-nav__item";

    return (
        <main className="dashboard-layout">
            <aside className="dashboard-sidebar">
                <AppLogo />

                <nav className="dashboard-nav">
                    {isPatient ? (
                        <>
                            <NavLink to="/patient/overview" className={navClass}>
                                Tổng quan phục hồi
                            </NavLink>

                            <NavLink to="/patient/tasks" className={navClass}>
                                Nhiệm vụ hôm nay
                            </NavLink>

                            <NavLink to="/patient/cough-recording" className={navClass}>
                                Ghi âm tiếng ho
                            </NavLink>

                            <NavLink to="/patient/health-questions" className={navClass}>
                                Câu hỏi sức khỏe
                            </NavLink>

                            <NavLink to="/patient/environment" className={navClass}>
                                Thông tin môi trường
                            </NavLink>

                            <NavLink to="/patient/ai-copilot" className={navClass}>
                                AI Copilot
                            </NavLink>

                            <NavLink to="/patient/recovery-history" className={navClass}>
                                Lịch sử phục hồi
                            </NavLink>
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
                        <strong>{displayName}</strong>
                    </div>
                </header>

                <div className="dashboard-content">{children}</div>
            </section>
        </main>
    );
}