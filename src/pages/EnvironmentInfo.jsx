import DashboardLayout from "../layouts/DashboardLayout.jsx";
import MetricCard from "../components/dashboard/MetricCard.jsx";

export default function EnvironmentInfo() {
    return (
        <DashboardLayout
            role="patient"
            title="Thông tin môi trường"
            subtitle="Theo dõi yếu tố môi trường có thể ảnh hưởng đến phục hồi hô hấp."
        >
            <div className="overview-grid">
                <MetricCard
                    label="Chất lượng không khí"
                    value="Tốt"
                    status="An toàn"
                    statusType="good"
                />

                <MetricCard
                    label="Độ ẩm"
                    value="58%"
                    status="Phù hợp"
                    statusType="info"
                />

                <MetricCard
                    label="Nhiệt độ"
                    value="27°C"
                    status="Ổn định"
                    statusType="info"
                />

                <MetricCard
                    label="Khói bụi"
                    value="Thấp"
                    status="Ít rủi ro"
                    statusType="good"
                />
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