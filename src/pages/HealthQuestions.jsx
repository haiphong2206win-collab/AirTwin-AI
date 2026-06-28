import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";

export default function HealthQuestions() {
    return (
        <DashboardLayout
            role="patient"
            title="Câu hỏi sức khỏe"
            subtitle="Cập nhật triệu chứng hằng ngày để AI theo dõi quá trình phục hồi."
        >
            <DashboardPanel title="Bảng câu hỏi hôm nay">
                <div className="question-list">
                    <label>
                        Hôm nay bạn có khó thở không?
                        <select>
                            <option>Không</option>
                            <option>Nhẹ</option>
                            <option>Trung bình</option>
                            <option>Nặng</option>
                        </select>
                    </label>

                    <label>
                        Bạn có bị đau ngực không?
                        <select>
                            <option>Không</option>
                            <option>Có, nhẹ</option>
                            <option>Có, rõ rệt</option>
                        </select>
                    </label>

                    <label>
                        Bạn có sốt hoặc mệt mỏi bất thường không?
                        <select>
                            <option>Không</option>
                            <option>Có</option>
                        </select>
                    </label>

                    <label>
                        Ghi chú thêm
                        <textarea placeholder="Nhập mô tả triệu chứng nếu có..." />
                    </label>

                    <button className="primary-button" type="button">
                        Gửi câu trả lời
                    </button>
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}