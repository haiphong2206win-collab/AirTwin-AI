import DashboardLayout from "../layouts/DashboardLayout.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";
import MetricCard from "../components/dashboard/MetricCard.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";
import AlertItem from "../components/doctor/AlertItem.jsx";

export default function DoctorOverview() {
    return (
        <DashboardLayout
            role="doctor"
            title="Tổng quan bệnh nhân"
            subtitle="Theo dõi tình trạng phục hồi, cảnh báo và mức độ ưu tiên lâm sàng."
        >
            <div className="overview-grid">
                <MetricCard
                    label="Tổng bệnh nhân"
                    value="24"
                    status="Đang theo dõi"
                    statusType="info"
                />

                <MetricCard
                    label="Cảnh báo mới"
                    value="6"
                    status="Cần kiểm tra"
                    statusType="warning"
                />

                <MetricCard
                    label="Nguy cơ cao"
                    value="3"
                    status="Ưu tiên"
                    statusType="danger"
                />

                <MetricCard
                    label="Đang cải thiện"
                    value="15"
                    status="Ổn định"
                    statusType="good"
                />
            </div>

            <DashboardPanel
                title="Danh sách bệnh nhân cần chú ý"
                subtitle="AI sắp xếp theo mức độ cần can thiệp lâm sàng."
            >
                <div className="patient-table">
                    <div className="patient-table__row patient-table__row--head">
                        <span>Bệnh nhân</span>
                        <span>Trạng thái phục hồi</span>
                        <span>Mức chú ý</span>
                        <span>Dấu hiệu chính</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>Nguyễn Minh Anh</strong>
                        <StatusPill type="good">Đang cải thiện</StatusPill>
                        <StatusPill type="warning">Trung bình</StatusPill>
                        <span>Ho giảm, SpO₂ ổn định</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>Trần Quốc Huy</strong>
                        <StatusPill type="warning">Cần chú ý</StatusPill>
                        <StatusPill type="danger">Cao</StatusPill>
                        <span>Ho tăng, khó thở nhẹ</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>Lê Thảo Vy</strong>
                        <StatusPill type="info">Ổn định</StatusPill>
                        <StatusPill type="good">Thấp</StatusPill>
                        <span>Triệu chứng ít thay đổi</span>
                    </div>
                </div>
            </DashboardPanel>

            <DashboardPanel title="Cảnh báo AI gần đây">
                <div className="alert-list">
                    <AlertItem
                        type="danger"
                        title="Nguy cơ tái phát triệu chứng"
                        description="Bệnh nhân Trần Quốc Huy có tần suất ho tăng trong 48 giờ qua."
                    />

                    <AlertItem
                        type="warning"
                        title="Môi trường sống cần chú ý"
                        description="Độ ẩm thấp và bụi mịn cao có thể ảnh hưởng quá trình phục hồi."
                    />

                    <AlertItem
                        type="info"
                        title="Phục hồi tích cực"
                        description="15 bệnh nhân có xu hướng cải thiện ổn định trong tuần này."
                    />
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}