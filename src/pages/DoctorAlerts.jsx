import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";
import AlertItem from "../components/doctor/AlertItem.jsx";

const initialAlerts = [
    {
        id: 1,
        type: "danger",
        title: "Nguy cơ cao - Trần Quốc Huy",
        description:
            "Tần suất ho tăng trong 48 giờ qua, kèm khó thở nhẹ vào buổi tối.",
    },
    {
        id: 2,
        type: "warning",
        title: "Cần chú ý - Nguyễn Minh Anh",
        description:
            "Mức chú ý lâm sàng trung bình, cần tiếp tục theo dõi triệu chứng.",
    },
    {
        id: 3,
        type: "info",
        title: "Thông tin môi trường",
        description:
            "Một số bệnh nhân ghi nhận độ ẩm thấp, có thể gây kích ứng đường thở.",
    },
];

export default function DoctorAlerts() {
    const [alerts, setAlerts] = useState(initialAlerts);

    const handleResolveAlert = (alertId) => {
        setAlerts((currentAlerts) =>
            currentAlerts.filter((alert) => alert.id !== alertId)
        );
    };

    return (
        <DashboardLayout
            role="doctor"
            title="Danh sách cảnh báo"
            subtitle="Các tín hiệu AI cần bác sĩ xem xét và ưu tiên xử lý."
        >
            <DashboardPanel title={`Cảnh báo đang hoạt động (${alerts.length})`}>
                <p className="task-summary">
                    Còn {alerts.length} cảnh báo cần bác sĩ xem xét.
                </p>

                {alerts.length > 0 ? (
                    <div className="alert-list">
                        {alerts.map((alert) => (
                            <AlertItem
                                key={alert.id}
                                type={alert.type}
                                title={alert.title}
                                description={alert.description}
                                showAction
                                onAction={() => handleResolveAlert(alert.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <strong>Không còn cảnh báo cần xử lý</strong>
                        <span>
                            Tất cả cảnh báo AI hiện tại đã được bác sĩ đánh dấu là đã xem.
                        </span>
                    </div>
                )}
            </DashboardPanel>
        </DashboardLayout>
    );
}