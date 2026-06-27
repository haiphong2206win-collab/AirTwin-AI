import DashboardLayout from "../layouts/DashboardLayout.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";

export default function EnvironmentInfo() {
    return (
        <DashboardLayout
            role="patient"
            title="Thông tin môi trường"
            subtitle="Theo dõi yếu tố môi trường có thể ảnh hưởng đến phục hồi hô hấp."
        >
            <div className="overview-grid">
                <article className="metric-card">
                    <p>Chất lượng không khí</p>
                    <h2>Tốt</h2>
                    <StatusPill type="good">An toàn</StatusPill>
                </article>

                <article className="metric-card">
                    <p>Độ ẩm</p>
                    <h2>58%</h2>
                    <StatusPill type="info">Phù hợp</StatusPill>
                </article>

                <article className="metric-card">
                    <p>Nhiệt độ</p>
                    <h2>27°C</h2>
                    <StatusPill type="info">Ổn định</StatusPill>
                </article>

                <article className="metric-card">
                    <p>Khói bụi</p>
                    <h2>Thấp</h2>
                    <StatusPill type="good">Ít rủi ro</StatusPill>
                </article>
            </div>

            <section className="dashboard-panel">
                <h2>Khuyến nghị môi trường</h2>

                <div className="task-list">
                    <div>
                        <strong>Giữ phòng thông thoáng</strong>
                        <span>Mở cửa hoặc dùng quạt thông khí khi chất lượng không khí tốt.</span>
                    </div>

                    <div>
                        <strong>Tránh khói thuốc và bụi mịn</strong>
                        <span>Không ở gần khu vực có khói, hóa chất hoặc bụi cao.</span>
                    </div>

                    <div>
                        <strong>Duy trì độ ẩm phù hợp</strong>
                        <span>Độ ẩm quá thấp có thể làm đường thở khô và dễ kích ứng.</span>
                    </div>
                </div>
            </section>

            <section className="dashboard-panel">
                <h2>Các yếu tố AI đang theo dõi</h2>

                <div className="environment-grid">
                    <div>
                        <strong>Không khí trong phòng</strong>
                        <span>Đánh giá mức độ thông thoáng và nguy cơ kích ứng đường thở.</span>
                    </div>

                    <div>
                        <strong>Nhiệt độ</strong>
                        <span>Theo dõi thay đổi nhiệt độ có thể ảnh hưởng đến triệu chứng.</span>
                    </div>

                    <div>
                        <strong>Độ ẩm</strong>
                        <span>Phát hiện môi trường quá khô hoặc quá ẩm.</span>
                    </div>

                    <div>
                        <strong>Khói bụi</strong>
                        <span>Ghi nhận nguy cơ từ bụi mịn, khói thuốc hoặc ô nhiễm.</span>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
}