import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";

const initialMessages = [
    {
        id: 1,
        sender: "ai",
        name: "AirTwin AI",
        text: "Hôm nay tình trạng của bạn đang có xu hướng cải thiện. Tần suất ho giảm và không có dấu hiệu cảnh báo nguy cơ cao.",
    },
    {
        id: 2,
        sender: "user",
        name: "Bạn",
        text: "Tôi vẫn còn hơi mệt, như vậy có bình thường không?",
    },
    {
        id: 3,
        sender: "ai",
        name: "AirTwin AI",
        text: "Mệt nhẹ có thể vẫn xuất hiện trong giai đoạn phục hồi. Tuy nhiên nếu mệt tăng, khó thở, đau ngực hoặc sốt cao, bạn nên liên hệ bác sĩ.",
    },
];

const suggestions = [
    "Hôm nay tôi hồi phục tốt không?",
    "Khi nào tôi cần liên hệ bác sĩ?",
    "Tiếng ho của tôi có đáng lo không?",
    "Tôi nên làm gì để phục hồi nhanh hơn?",
];

export default function AiCopilot() {
    const [messages, setMessages] = useState(initialMessages);
    const [question, setQuestion] = useState("");

    const createAiResponse = (userQuestion) => {
        const lowerQuestion = userQuestion.toLowerCase();

        if (lowerQuestion.includes("bác sĩ") || lowerQuestion.includes("liên hệ")) {
            return "Bạn nên liên hệ bác sĩ nếu có khó thở tăng, đau ngực, sốt cao, SpO2 giảm hoặc cảm thấy mệt bất thường kéo dài.";
        }

        if (lowerQuestion.includes("ho") || lowerQuestion.includes("tiếng ho")) {
            return "Dựa trên dữ liệu mô phỏng hiện tại, tiếng ho của bạn đang có xu hướng nhẹ hơn. Bạn vẫn nên tiếp tục ghi âm đều để AI theo dõi thay đổi.";
        }

        if (lowerQuestion.includes("phục hồi") || lowerQuestion.includes("hồi phục")) {
            return "Quá trình phục hồi của bạn đang có tín hiệu tích cực. Hãy tiếp tục hoàn thành nhiệm vụ hằng ngày, nghỉ ngơi đủ và theo dõi triệu chứng.";
        }

        return "AI đã ghi nhận câu hỏi của bạn. Hiện tại đây là phản hồi mô phỏng, chưa thay thế tư vấn y tế từ bác sĩ.";
    };

    const handleSendMessage = () => {
        const trimmedQuestion = question.trim();

        if (!trimmedQuestion) return;

        const userMessage = {
            id: Date.now(),
            sender: "user",
            name: "Bạn",
            text: trimmedQuestion,
        };

        const aiMessage = {
            id: Date.now() + 1,
            sender: "ai",
            name: "AirTwin AI",
            text: createAiResponse(trimmedQuestion),
        };

        setMessages((currentMessages) => [
            ...currentMessages,
            userMessage,
            aiMessage,
        ]);

        setQuestion("");
    };

    const handleSelectSuggestion = (suggestion) => {
        setQuestion(suggestion);
    };

    return (
        <DashboardLayout
            role="patient"
            title="AI Copilot"
            subtitle="Trợ lý AI hỗ trợ giải thích tình trạng phục hồi bằng ngôn ngữ dễ hiểu."
        >
            <DashboardPanel className="copilot-panel">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={
                            message.sender === "ai"
                                ? "chat-message chat-message--ai"
                                : "chat-message chat-message--user"
                        }
                    >
                        <strong>{message.name}</strong>
                        <p>{message.text}</p>
                    </div>
                ))}

                <div className="chat-input">
                    <input
                        value={question}
                        placeholder="Nhập câu hỏi cho AI Copilot..."
                        onChange={(event) => setQuestion(event.target.value)}
                    />

                    <button type="button" onClick={handleSendMessage}>
                        Gửi
                    </button>
                </div>
            </DashboardPanel>

            <DashboardPanel title="Gợi ý câu hỏi">
                <div className="suggestion-grid">
                    {suggestions.map((suggestion) => (
                        <button
                            key={suggestion}
                            type="button"
                            onClick={() => handleSelectSuggestion(suggestion)}
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}