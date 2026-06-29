import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";

const initialTasks = [
    {
        id: 1,
        title: "Ghi âm tiếng ho",
        description: "Ghi âm 20 giây trong môi trường yên tĩnh.",
        completed: false,
    },
    {
        id: 2,
        title: "Trả lời câu hỏi sức khỏe",
        description: "Cập nhật khó thở, đau ngực, sốt, mệt mỏi.",
        completed: false,
    },
    {
        id: 3,
        title: "Cập nhật môi trường sống",
        description: "Ghi nhận khói bụi, nhiệt độ, độ ẩm và chất lượng không khí.",
        completed: false,
    },
];

export default function PatientTasks() {
    const [tasks, setTasks] = useState(initialTasks);

    const completedCount = tasks.filter((task) => task.completed).length;

    const handleToggleTask = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }

            return task;
        });

        setTasks(updatedTasks);
    };

    return (
        <DashboardLayout
            role="patient"
            title="Nhiệm vụ hôm nay"
            subtitle="Hoàn thành các bước theo dõi để AI đánh giá quá trình phục hồi."
        >
            <DashboardPanel title="Danh sách nhiệm vụ">
                <p className="task-summary">
                    Đã hoàn thành {completedCount}/{tasks.length} nhiệm vụ hôm nay.
                </p>

                <div className="task-list">
                    {tasks.map((task) => (
                        <div key={task.id}>
                            <strong>{task.title}</strong>
                            <span>{task.description}</span>

                            <StatusPill type={task.completed ? "good" : "warning"}>
                                {task.completed ? "Đã xong" : "Chưa xong"}
                            </StatusPill>

                            <button
                                className={task.completed ? "task-button is-done" : "task-button"}
                                type="button"
                                onClick={() => handleToggleTask(task.id)}
                            >
                                {task.completed ? "Hoàn tác" : "Hoàn thành"}
                            </button>
                        </div>
                    ))}
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}