import DashboardLayout from "../layouts/DashboardLayout.jsx";

export default function DoctorAlerts() {
    return (
        <DashboardLayout
            role="doctor"
            title="Danh sách cảnh báo"
            subtitle="Các tín hiệu AI cần bác sĩ xem xét và ưu tiên xử lý."
        >
            <section className="dashboard-panel">
                <h2>Cảnh báo đang hoạt động</h2>

                <div className="alert-list">
                    <div className="alert-item alert-item--danger">
                        <strong>Nguy cơ cao - Trần Quốc Huy</strong>
                        <span>
                            Tần suất ho tăng trong 48 giờ qua, kèm khó thở nhẹ vào buổi tối.
                        </span>
                        <button type="button">Đánh dấu đã xem</button>
                    </div>

                    <div className="alert-item alert-item--warning">
                        <strong>Cần chú ý - Nguyễn Minh Anh</strong>
                        <span>
                            Mức chú ý lâm sàng trung bình, cần tiếp tục theo dõi triệu chứng.
                        </span>
                        <button type="button">Đánh dấu đã xem</button>
                    </div>

                    <div className="alert-item alert-item--info">
                        <strong>Thông tin môi trường</strong>
                        <span>
                            Một số bệnh nhân ghi nhận độ ẩm thấp, có thể gây kích ứng đường thở.
                        </span>
                        <button type="button">Đánh dấu đã xem</button>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
}