import DashboardLayout from "../layouts/DashboardLayout.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";

export default function CoughRecording() {
    return (
        <DashboardLayout
            role="patient"
            title="Ghi âm tiếng ho"
            subtitle="Gửi mẫu tiếng ho để AI phân tích xu hướng phục hồi hô hấp."
        >
            <DashboardPanel className="recording-panel">
                <div>
                    <StatusPill type="info">
                        AI Cough Analysis
                    </StatusPill>

                    <h2>Sẵn sàng ghi âm</h2>

                    <p>
                        Hãy ở nơi yên tĩnh, đặt thiết bị gần miệng và ghi âm khoảng 20 giây.
                        Dữ liệu này sẽ giúp AI theo dõi sự thay đổi của tiếng ho theo thời gian.
                    </p>
                </div>

                <button className="record-button" type="button">
                    Bắt đầu ghi âm
                </button>
            </DashboardPanel>

            <DashboardPanel title="Kết quả phân tích gần nhất">
                <div className="analysis-grid">
                    <div>
                        <span>Tần suất ho</span>
                        <strong>Giảm 18%</strong>
                    </div>

                    <div>
                        <span>Âm sắc tiếng ho</span>
                        <strong>Ít khàn hơn</strong>
                    </div>

                    <div>
                        <span>AI đánh giá</span>
                        <strong>Đang cải thiện</strong>
                    </div>
                </div>
            </DashboardPanel>

            <DashboardPanel title="Hướng dẫn ghi âm">
                <div className="task-list">
                    <div>
                        <strong>Chọn nơi yên tĩnh</strong>
                        <span>Tránh tiếng quạt, tiếng xe hoặc tiếng nói chuyện xung quanh.</span>
                    </div>

                    <div>
                        <strong>Giữ thiết bị ổn định</strong>
                        <span>Đặt thiết bị cách miệng khoảng 20 đến 30 cm.</span>
                    </div>

                    <div>
                        <strong>Không cố ho quá mạnh</strong>
                        <span>Ghi âm tiếng ho tự nhiên để AI phân tích chính xác hơn.</span>
                    </div>
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}