import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";

export default function PatientTasks() {
    return (
        <DashboardLayout
            role="patient"
            title="Nhiệm vụ hôm nay"
            subtitle="Hoàn thành các bước theo dõi để AI đánh giá quá trình phục hồi."
        >
            <DashboardPanel title="Danh sách nhiệm vụ">
                <div className="task-list">
                    <div>
                        <strong>Ghi âm tiếng ho</strong>
                        <span>Ghi âm 20 giây trong môi trường yên tĩnh.</span>
                    </div>

                    <div>
                        <strong>Trả lời câu hỏi sức khỏe</strong>
                        <span>Cập nhật khó thở, đau ngực, sốt, mệt mỏi.</span>
                    </div>

                    <div>
                        <strong>Cập nhật môi trường sống</strong>
                        <span>
                            Ghi nhận khói bụi, nhiệt độ, độ ẩm và chất lượng không khí.
                        </span>
                    </div>
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}