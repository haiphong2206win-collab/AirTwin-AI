// là component dùng lại nhiều lần để hiển thị trạng thái bằng một cái nhãn nhỏ có màu khác nhau theo type


export default function StatusPill({ type = "info", children }) {
    return (
        <span className={`status-pill status-pill--${type}`}>
            {children}
        </span>
    );
}