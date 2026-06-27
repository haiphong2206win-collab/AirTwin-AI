// Là cái khuôn cho từng khối nội dung trong dashboard.
// Giúp mình không phải viết lặp lại <section className="dashboard-panel">
// và phần tiêu đề nhiều lần.

export default function DashboardPanel({ title, subtitle, children, className = "" }) {
    return (
        <section className={`dashboard-panel ${className}`}>
            {title && subtitle && (
                <div className="panel-header">
                    <div>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                </div>
            )}

            {title && !subtitle && <h2>{title}</h2>}

            {children}
        </section>
    );
}