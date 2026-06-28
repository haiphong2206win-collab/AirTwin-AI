//dùng cho các cảnh báo AI


export default function AlertItem({
    type = "info",
    title,
    description,
    showAction = false,
}) {
    return (
        <div className={`alert-item alert-item--${type}`}>
            <strong>{title}</strong>
            <span>{description}</span>

            {showAction && (
                <button type="button">
                    Đánh dấu đã xem
                </button>
            )}
        </div>
    );
}