import AppLogo from "../components/common/AppLogo.jsx";

export default function DashboardLayout({ role, title, subtitle, children }) {

    {/*layout nhận dữ liệu từ trang khác truyền vào. */ }
    const isPatient = role === "patient";

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
                        <strong>{isPatient ? "Nguyễn Minh Anh" : "Dr. Lê Hoàng"}</strong>
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