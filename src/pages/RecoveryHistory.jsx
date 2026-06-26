import DashboardLayout from "../layouts/DashboardLayout.jsx";

export default function RecoveryHistory() {
    return (
        <DashboardLayout
            role="patient"
            title="Lịch sử phục hồi"
            subtitle="Xem lại tiến trình phục hồi hô hấp qua từng ngày."
        >
            <section className="dashboard-panel">
                <h2>Dòng thời gian phục hồi</h2>

                <div className="history-list">
                    <div>
                        <span>Hôm nay</span>
                        <strong>Đang cải thiện</strong>
                        <p>Ho giảm, triệu chứng ổn định, môi trường sống an toàn.</p>
                    </div>

                    <div>
                        <span>Hôm qua</span>
                        <strong>Ổn định</strong>
                        <p>Không có cảnh báo mới, mức chú ý lâm sàng trung bình.</p>
                    </div>

                    <div>
                        <span>2 ngày trước</span>
                        <strong>Cần chú ý</strong>
                        <p>Tần suất ho tăng nhẹ, AI khuyến nghị theo dõi thêm.</p>
                    </div>

                    <div>
                        <span>3 ngày trước</span>
                        <strong>Cần theo dõi</strong>
                        <p>Người bệnh còn mệt, ho nhiều hơn vào buổi tối.</p>
                    </div>
                </div>
            </section>

            <section className="dashboard-panel">
                <h2>Tóm tắt xu hướng</h2>

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
            </section>
        </DashboardLayout>
    );
}