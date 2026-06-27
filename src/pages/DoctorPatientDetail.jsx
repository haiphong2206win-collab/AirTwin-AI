import DashboardLayout from "../layouts/DashboardLayout.jsx";

export default function DoctorPatientDetail() {
    return (
        <DashboardLayout
            role="doctor"
            title="Chi tiết bệnh nhân"
            subtitle="Xem hồ sơ phục hồi, cảnh báo và giải thích AI của một bệnh nhân."
        >
            <div className="overview-grid">
                <article className="metric-card">
                    <p>Bệnh nhân</p>
                    <h2>Trần Quốc Huy</h2>
                    <span className="status-pill status-pill--danger">Ưu tiên cao</span>
                </article>

                <article className="metric-card">
                    <p>Recovery Status</p>
                    <h2>Cần chú ý</h2>
                    <span className="status-pill status-pill--warning">Theo dõi sát</span>
                </article>

                <article className="metric-card">
                    <p>Cough Trend</p>
                    <h2>Tăng 24%</h2>
                    <span className="status-pill status-pill--danger">Bất thường</span>
                </article>

                <article className="metric-card">
                    <p>Environment Risk</p>
                    <h2>Trung bình</h2>
                    <span className="status-pill status-pill--warning">
                        Có yếu tố kích ứng
                    </span>
                </article>
            </div>

            <section className="dashboard-panel">
                <h2>Explainable Recovery Status</h2>

                <div className="explain-list">
                    <div>
                        <strong>Lý do AI đánh giá cần chú ý</strong>
                        <span>
                            Tiếng ho tăng, triệu chứng khó thở nhẹ xuất hiện lại và môi trường
                            có độ ẩm thấp trong 2 ngày gần đây.
                        </span>
                    </div>

                    <div>
                        <strong>Yếu tố tích cực</strong>
                        <span>
                            Không ghi nhận sốt cao, SpO₂ mô phỏng vẫn ổn định và bệnh nhân vẫn
                            hoàn thành nhiệm vụ hằng ngày.
                        </span>
                    </div>

                    <div>
                        <strong>Khuyến nghị cho bác sĩ</strong>
                        <span>
                            Nên xem lại bản ghi tiếng ho gần nhất và cân nhắc nhắc bệnh nhân
                            tái đánh giá nếu triệu chứng tiếp tục tăng.
                        </span>
                    </div>
                </div>
            </section>

            <section className="dashboard-panel">
                <h2>Dữ liệu theo dõi gần đây</h2>

                <div className="patient-table">
                    <div className="patient-table__row patient-table__row--head">
                        <span>Ngày</span>
                        <span>Tiếng ho</span>
                        <span>Triệu chứng</span>
                        <span>Môi trường</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>Hôm nay</strong>
                        <span className="status-pill status-pill--danger">Tăng</span>
                        <span>Khó thở nhẹ</span>
                        <span>Độ ẩm thấp</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>Hôm qua</strong>
                        <span className="status-pill status-pill--warning">Tăng nhẹ</span>
                        <span>Ho nhiều buổi tối</span>
                        <span>Ổn định</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>2 ngày trước</strong>
                        <span className="status-pill status-pill--info">Ổn định</span>
                        <span>Không sốt</span>
                        <span>Bụi thấp</span>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
}