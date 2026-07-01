import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";

const historyItems = [
    {
        id: 1,
        day: "Hôm nay",
        status: "Đang cải thiện",
        type: "good",
        description: "Ho giảm, triệu chứng ổn định, môi trường sống an toàn.",
        detail: "AI đánh giá quá trình phục hồi đang tích cực. Người bệnh nên tiếp tục hoàn thành nhiệm vụ hằng ngày.",
    },
    {
        id: 2,
        day: "Hôm qua",
        status: "Ổn định",
        type: "info",
        description: "Không có cảnh báo mới, mức chú ý lâm sàng trung bình.",
        detail: "Các chỉ số không có biến động lớn. Tiếp tục theo dõi tiếng ho và triệu chứng vào buổi tối.",
    },
    {
        id: 3,
        day: "2 ngày trước",
        status: "Cần chú ý",
        type: "warning",
        description: "Tần suất ho tăng nhẹ, AI khuyến nghị theo dõi thêm.",
        detail: "AI phát hiện tiếng ho tăng nhẹ. Nên tránh môi trường bụi và cập nhật triệu chứng đầy đủ.",
    },
    {
        id: 4,
        day: "3 ngày trước",
        status: "Cần theo dõi",
        type: "warning",
        description: "Người bệnh còn mệt, ho nhiều hơn vào buổi tối.",
        detail: "Triệu chứng mệt và ho buổi tối cần được theo dõi thêm để phát hiện thay đổi bất thường.",
    },
];

export default function RecoveryHistory() {
    const [selectedItem, setSelectedItem] = useState(historyItems[0]);

    return (
        <DashboardLayout
            role="patient"
            title="Lịch sử phục hồi"
            subtitle="Xem lại tiến trình phục hồi hô hấp qua từng ngày."
        >
            <DashboardPanel title="Dòng thời gian phục hồi">
                <div className="history-list">
                    {historyItems.map((item) => (
                        <button
                            key={item.id}
                            className={
                                selectedItem.id === item.id
                                    ? "history-item active"
                                    : "history-item"
                            }
                            type="button"
                            onClick={() => setSelectedItem(item)}
                        >
                            <span>{item.day}</span>
                            <strong>{item.status}</strong>
                            <p>{item.description}</p>
                        </button>
                    ))}
                </div>
            </DashboardPanel>

            <DashboardPanel title="Chi tiết mốc phục hồi">
                <div className="selected-history">
                    <StatusPill type={selectedItem.type}>
                        {selectedItem.status}
                    </StatusPill>

                    <h3>{selectedItem.day}</h3>
                    <p>{selectedItem.detail}</p>
                </div>
            </DashboardPanel>

            <DashboardPanel title="Tóm tắt xu hướng">
                <div className="analysis-grid">
                    <div>
                        <span>7 ngày gần đây</span>
                        <strong>Cải thiện</strong>
                    </div>

                    <div>
                        <span>Triệu chứng nổi bật</span>
                        <strong>Ho giảm</strong>
                    </div>

                    <div>
                        <span>Mức chú ý hiện tại</span>
                        <strong>Trung bình</strong>
                    </div>
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}