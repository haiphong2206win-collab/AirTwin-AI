import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";

export default function CoughRecording() {
    const [recordingStatus, setRecordingStatus] = useState("idle");

    const isRecording = recordingStatus === "recording";
    const isCompleted = recordingStatus === "completed";

    const handleRecording = () => {
        if (isCompleted) {
            setRecordingStatus("idle");
            return;
        }

        setRecordingStatus("recording");

        setTimeout(() => {
            setRecordingStatus("completed");
        }, 3000);
    };

    return (
        <DashboardLayout
            role="patient"
            title="Ghi âm tiếng ho"
            subtitle="Gửi mẫu tiếng ho để AI phân tích xu hướng phục hồi hô hấp."
        >
            <DashboardPanel className="recording-panel">
                <div>
                    <StatusPill type={isCompleted ? "good" : "info"}>
                        {isCompleted ? "Đã gửi mẫu" : "AI Cough Analysis"}
                    </StatusPill>

                    <h2>
                        {isRecording
                            ? "Đang ghi âm..."
                            : isCompleted
                                ? "Đã gửi mẫu tiếng ho"
                                : "Sẵn sàng ghi âm"}
                    </h2>

                    <p>
                        {isRecording
                            ? "Hệ thống đang ghi nhận mẫu tiếng ho. Vui lòng giữ thiết bị ổn định và ở nơi yên tĩnh."
                            : isCompleted
                                ? "AI đã nhận mẫu tiếng ho mới nhất và sẽ dùng dữ liệu này để đánh giá xu hướng phục hồi."
                                : "Hãy ở nơi yên tĩnh, đặt thiết bị gần miệng và ghi âm khoảng 20 giây. Dữ liệu này sẽ giúp AI theo dõi sự thay đổi của tiếng ho theo thời gian."}
                    </p>

                    {isCompleted && (
                        <p className="recording-feedback">
                            Mẫu ghi âm đã được gửi thành công. Kết quả phân tích sẽ được cập nhật trong báo cáo phục hồi.
                        </p>
                    )}
                </div>

                <button
                    className={isRecording ? "record-button is-recording" : "record-button"}
                    type="button"
                    onClick={handleRecording}
                    disabled={isRecording}
                >
                    {isRecording
                        ? "Đang ghi..."
                        : isCompleted
                            ? "Ghi âm lại"
                            : "Bắt đầu ghi âm"}
                </button>
            </DashboardPanel>

            <DashboardPanel title="Kết quả phân tích gần nhất">
                <div className="analysis-grid">
                    <div>
                        <span>Tần suất ho</span>
                        <strong>{isCompleted ? "Đang cập nhật" : "Giảm 18%"}</strong>
                    </div>

                    <div>
                        <span>Âm sắc tiếng ho</span>
                        <strong>{isCompleted ? "Đã nhận mẫu mới" : "Ít khàn hơn"}</strong>
                    </div>

                    <div>
                        <span>AI đánh giá</span>
                        <strong>{isCompleted ? "Chờ phân tích" : "Đang cải thiện"}</strong>
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