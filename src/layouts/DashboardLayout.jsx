import { NavLink } from "react-router";
//NavLink dùng để chuyển trang trong React, giống link nhưng không reload lại web.
import AppLogo from "../components/common/AppLogo.jsx";

export default function DashboardLayout({ role, title, subtitle, children }) {

    /*layout nhận dữ liệu từ trang khác truyền vào. */
    const isPatient = role === "patient";

    //khỏi phải viết lặp className dài cho từng menu.
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
                            <button className="dashboard-nav__item active" type="button">
                                Tổng quan bệnh nhân
                            </button>

                            <button className="dashboard-nav__item" type="button">
                                Danh sách bệnh nhân
                            </button>

                            <button className="dashboard-nav__item" type="button">
                                Danh sách cảnh báo
                            </button>

                            <button className="dashboard-nav__item" type="button">
                                Chi tiết bệnh nhân
                            </button>

                            <button className="dashboard-nav__item" type="button">
                                Báo cáo AI
                            </button>
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