import DashboardLayout from "../layouts/DashboardLayout.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";
import MetricCard from "../components/dashboard/MetricCard.jsx";
// muốn dùng layout thì phải import nó vào page.
// Mình sẽ không dùng <main> riêng nữa, vì DashboardLayout đã có <main> rồi.

import {
    patientProfile,
    patientMetrics,
    todayTasks,
} from "../Data/patientData.js";

export default function PatientOverview() {
    const getStatusType = (status) => {
        if (status === "good") return "good";
        if (status === "warning") return "warning";
        if (status === "info") return "info";
        if (status === "danger") return "danger";
        return "info";
    };

    const getTaskStatusLabel = (status) => {
        if (status === "done") return "Đã hoàn thành";
        if (status === "pending") return "Chưa hoàn thành";
        return "Chưa rõ";
    };

    const getTaskStatusType = (status) => {
        if (status === "done") return "good";
        if (status === "pending") return "warning";
        return "info";
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
                    <MetricCard
                        key={metric.id}
                        label={metric.label}
                        value={metric.value}
                        status={metric.note}
                        statusType={getStatusType(metric.status)}
                    />
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

                            <StatusPill type={getTaskStatusType(task.status)}>
                                {getTaskStatusLabel(task.status)}
                            </StatusPill>
                        </div>
                    ))}
                </div>
            </section>
        </DashboardLayout>
    );
}