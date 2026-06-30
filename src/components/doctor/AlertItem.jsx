// dùng cho các cảnh báo AI

export default function AlertItem({
    type = "info",
    title,
    description,
    showAction = false,
    actionLabel = "Đánh dấu đã xem",
    onAction,
}) {
    return (
        <div className={`alert-item alert-item--${type}`}>
            <strong>{title}</strong>
            <span>{description}</span>

            {showAction && (
                <button type="button" onClick={onAction}>
                    {actionLabel}
                </button>
            )}
        </div>
    );
}