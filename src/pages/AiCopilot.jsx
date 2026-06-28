import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";

export default function AiCopilot() {
    return (
        <DashboardLayout
            role="patient"
            title="AI Copilot"
            subtitle="Trợ lý AI hỗ trợ giải thích tình trạng phục hồi bằng ngôn ngữ dễ hiểu."
        >
            <DashboardPanel className="copilot-panel">
                <div className="chat-message chat-message--ai">
                    <strong>AirTwin AI</strong>
                    <p>
                        Hôm nay tình trạng của bạn đang có xu hướng cải thiện. Tần suất ho
                        giảm và không có dấu hiệu cảnh báo nguy cơ cao.
                    </p>
                </div>

                <div className="chat-message chat-message--user">
                    <strong>Bạn</strong>
                    <p>Tôi vẫn còn hơi mệt, như vậy có bình thường không?</p>
                </div>

                <div className="chat-message chat-message--ai">
                    <strong>AirTwin AI</strong>
                    <p>
                        Mệt nhẹ có thể vẫn xuất hiện trong giai đoạn phục hồi. Tuy nhiên nếu
                        mệt tăng, khó thở, đau ngực hoặc sốt cao, bạn nên liên hệ bác sĩ.
                    </p>
                </div>

                <div className="chat-input">
                    <input placeholder="Nhập câu hỏi cho AI Copilot..." />
                    <button type="button">Gửi</button>
                </div>
            </DashboardPanel>

            <DashboardPanel title="Gợi ý câu hỏi">
                <div className="suggestion-grid">
                    <button type="button">Hôm nay tôi hồi phục tốt không?</button>
                    <button type="button">Khi nào tôi cần liên hệ bác sĩ?</button>
                    <button type="button">Tiếng ho của tôi có đáng lo không?</button>
                    <button type="button">Tôi nên làm gì để phục hồi nhanh hơn?</button>
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}