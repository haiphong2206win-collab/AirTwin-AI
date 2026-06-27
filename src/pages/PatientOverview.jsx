import DashboardLayout from "../layouts/DashboardLayout.jsx";
// muốn dùng layout thì phải import nó vào page.
// Mình sẽ không dùng <main> riêng nữa, vì DashboardLayout đã có <main> rồi.

import {
    patientProfile,
    patientMetrics,
    todayTasks,
} from "../Data/patientData.js";

export default function PatientOverview() {
    const getStatusClass = (status) => {
        if (status === "good") return "status-pill--good";
        if (status === "warning") return "status-pill--warning";
        if (status === "info") return "status-pill--info";
        if (status === "danger") return "status-pill--danger";
        return "status-pill--info";
    };

    const getTaskStatusLabel = (status) => {
        if (status === "done") return "Đã hoàn thành";
        if (status === "pending") return "Chưa hoàn thành";
        return "Chưa rõ";
    };

    const getTaskStatusClass = (status) => {
        if (status === "done") return "status-pill--good";
        if (status === "pending") return "status-pill--warning";
        return "status-pill--info";
    };

    return (
        <DashboardLayout
            role="patient"
            title="Tổng quan phục hồi"
            subtitle={`Theo dõi trạng thái phục hồi hô hấp sau xuất viện của ${patientProfile.name}.`}
            userName={patientProfile.name}
        >
            <div className="overview-grid">
                {patientMetrics.map((metric) => (
                    <article className="metric-card" key={metric.id}>
                        <p>{metric.label}</p>
                        <h2>{metric.value}</h2>
                        <span className={`status-pill ${getStatusClass(metric.status)}`}>
                            {metric.note}
                        </span>
                    </article>
                ))}
            </div>

            <section className="dashboard-panel">
                <div className="panel-header">
                    <div>
                        <h2>Nhiệm vụ hôm nay</h2>
                        <p>Những việc bệnh nhân cần hoàn thành để hệ thống theo dõi phục hồi chính xác hơn.</p>
                    </div>
                </div>

                <div className="task-list">
                    {todayTasks.map((task) => (
                        <div key={task.id}>
                            <div>
                                <strong>{task.title}</strong>
                                <span>{task.description}</span>
                            </div>

                            <span className={`status-pill ${getTaskStatusClass(task.status)}`}>
                                {getTaskStatusLabel(task.status)}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </DashboardLayout>
    );
}