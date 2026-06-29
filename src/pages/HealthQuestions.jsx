import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";

export default function HealthQuestions() {
    const [answers, setAnswers] = useState({
        breathing: "Không",
        chestPain: "Không",
        fever: "Không",
        note: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChangeAnswer = (event) => {
        const { name, value } = event.target;

        setAnswers((currentAnswers) => ({
            ...currentAnswers,
            [name]: value,
        }));

        setIsSubmitted(false);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <DashboardLayout
            role="patient"
            title="Câu hỏi sức khỏe"
            subtitle="Cập nhật triệu chứng hằng ngày để AI theo dõi quá trình phục hồi."
        >
            <DashboardPanel title="Bảng câu hỏi hôm nay">
                {isSubmitted && (
                    <div className="form-success">
                        <StatusPill type="good">Đã gửi</StatusPill>
                        <p>
                            Báo cáo triệu chứng hôm nay đã được gửi thành công.
                            AI sẽ sử dụng dữ liệu này để theo dõi xu hướng phục hồi.
                        </p>
                    </div>
                )}

                <div className="question-list">
                    <label>
                        Hôm nay bạn có khó thở không?
                        <select
                            name="breathing"
                            value={answers.breathing}
                            onChange={handleChangeAnswer}
                        >
                            <option>Không</option>
                            <option>Nhẹ</option>
                            <option>Trung bình</option>
                            <option>Nặng</option>
                        </select>
                    </label>

                    <label>
                        Bạn có bị đau ngực không?
                        <select
                            name="chestPain"
                            value={answers.chestPain}
                            onChange={handleChangeAnswer}
                        >
                            <option>Không</option>
                            <option>Có, nhẹ</option>
                            <option>Có, rõ rệt</option>
                        </select>
                    </label>

                    <label>
                        Bạn có sốt hoặc mệt mỏi bất thường không?
                        <select
                            name="fever"
                            value={answers.fever}
                            onChange={handleChangeAnswer}
                        >
                            <option>Không</option>
                            <option>Có</option>
                        </select>
                    </label>

                    <label>
                        Ghi chú thêm
                        <textarea
                            name="note"
                            value={answers.note}
                            placeholder="Nhập mô tả triệu chứng nếu có..."
                            onChange={handleChangeAnswer}
                        />
                    </label>

                    <button
                        className="primary-button"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Gửi câu trả lời
                    </button>
                </div>
            </DashboardPanel>

            {isSubmitted && (
                <DashboardPanel title="Tóm tắt câu trả lời">
                    <div className="answer-summary">
                        <div>
                            <span>Khó thở</span>
                            <strong>{answers.breathing}</strong>
                        </div>

                        <div>
                            <span>Đau ngực</span>
                            <strong>{answers.chestPain}</strong>
                        </div>

                        <div>
                            <span>Sốt hoặc mệt mỏi</span>
                            <strong>{answers.fever}</strong>
                        </div>

                        <div>
                            <span>Ghi chú</span>
                            <strong>{answers.note || "Không có ghi chú thêm"}</strong>
                        </div>
                    </div>
                </DashboardPanel>
            )}
        </DashboardLayout>
    );
}