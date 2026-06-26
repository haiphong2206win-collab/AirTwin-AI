import DashboardLayout from "../layouts/DashboardLayout.jsx";

export default function DoctorOverview() {
    return (
        <DashboardLayout
            role="doctor"
            title="Tổng quan bệnh nhân"
            subtitle="Theo dõi tình trạng phục hồi, cảnh báo và mức độ ưu tiên lâm sàng."
        >
            <div className="overview-grid">
                <article className="metric-card">
                    <p>Tổng bệnh nhân</p>
                    <h2>24</h2>
                    <span className="status-pill status-pill--info">Đang theo dõi</span>
                </article>

                <article className="metric-card">
                    <p>Cảnh báo mới</p>
                    <h2>6</h2>
                    <span className="status-pill status-pill--warning">Cần kiểm tra</span>
                </article>

                <article className="metric-card">
                    <p>Nguy cơ cao</p>
                    <h2>3</h2>
                    <span className="status-pill status-pill--danger">Ưu tiên</span>
                </article>

                <article className="metric-card">
                    <p>Đang cải thiện</p>
                    <h2>15</h2>
                    <span className="status-pill status-pill--good">Ổn định</span>
                </article>
            </div>

            <section className="dashboard-panel">
                <div className="panel-header">
                    <div>
                        <h2>Danh sách bệnh nhân cần chú ý</h2>
                        <p>AI sắp xếp theo mức độ cần can thiệp lâm sàng.</p>
                    </div>
                </div>

                <div className="patient-table">
                    <div className="patient-table__row patient-table__row--head">
                        <span>Bệnh nhân</span>
                        <span>Trạng thái phục hồi</span>
                        <span>Mức chú ý</span>
                        <span>Dấu hiệu chính</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>Nguyễn Minh Anh</strong>
                        <span className="status-pill status-pill--good">Đang cải thiện</span>
                        <span className="status-pill status-pill--warning">Trung bình</span>
                        <span>Ho giảm, SpO₂ ổn định</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>Trần Quốc Huy</strong>
                        <span className="status-pill status-pill--warning">Cần chú ý</span>
                        <span className="status-pill status-pill--danger">Cao</span>
                        <span>Ho tăng, khó thở nhẹ</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>Lê Thảo Vy</strong>
                        <span className="status-pill status-pill--info">Ổn định</span>
                        <span className="status-pill status-pill--good">Thấp</span>
                        <span>Triệu chứng ít thay đổi</span>
                    </div>
                </div>
            </section>

            <section className="dashboard-panel">
                <h2>Cảnh báo AI gần đây</h2>

                <div className="alert-list">
                    <div className="alert-item alert-item--danger">
                        <strong>Nguy cơ tái phát triệu chứng</strong>
                        <span>Bệnh nhân Trần Quốc Huy có tần suất ho tăng trong 48 giờ qua.</span>
                    </div>

                    <div className="alert-item alert-item--warning">
                        <strong>Môi trường sống cần chú ý</strong>
                        <span>Độ ẩm thấp và bụi mịn cao có thể ảnh hưởng quá trình phục hồi.</span>
                    </div>

                    <div className="alert-item alert-item--info">
                        <strong>Phục hồi tích cực</strong>
                        <span>15 bệnh nhân có xu hướng cải thiện ổn định trong tuần này.</span>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
}