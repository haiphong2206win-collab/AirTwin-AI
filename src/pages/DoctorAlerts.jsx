import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";
import AlertItem from "../components/doctor/AlertItem.jsx";

export default function DoctorAlerts() {
    return (
        <DashboardLayout
            role="doctor"
            title="Danh sách cảnh báo"
            subtitle="Các tín hiệu AI cần bác sĩ xem xét và ưu tiên xử lý."
        >
            <DashboardPanel title="Cảnh báo đang hoạt động">
                <div className="alert-list">
                    <AlertItem
                        type="danger"
                        title="Nguy cơ cao - Trần Quốc Huy"
                        description="Tần suất ho tăng trong 48 giờ qua, kèm khó thở nhẹ vào buổi tối."
                        showAction
                    />

                    <AlertItem
                        type="warning"
                        title="Cần chú ý - Nguyễn Minh Anh"
                        description="Mức chú ý lâm sàng trung bình, cần tiếp tục theo dõi triệu chứng."
                        showAction
                    />

                    <AlertItem
                        type="info"
                        title="Thông tin môi trường"
                        description="Một số bệnh nhân ghi nhận độ ẩm thấp, có thể gây kích ứng đường thở."
                        showAction
                    />
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}