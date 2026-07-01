//file xử lý logic
export function getHealthStatus(req, res) {
    res.json({
        status: "ok",
        message: "AirTwin AI API is running",
    });
}