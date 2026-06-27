//tạo sẵn cái khung ô thống kê, để mình không phải viết lại nhiều lần.


import StatusPill from "./StatusPill.jsx";

export default function MetricCard({ label, value, status, statusType = "info" }) {
    return (
        <article className="metric-card">
            <p>{label}</p>
            <h2>{value}</h2>
            <StatusPill type={statusType}>{status}</StatusPill>
        </article>
    );
}