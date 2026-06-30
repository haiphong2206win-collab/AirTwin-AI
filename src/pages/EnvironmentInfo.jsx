import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import MetricCard from "../components/dashboard/MetricCard.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";

export default function EnvironmentInfo() {
    const [environment, setEnvironment] = useState({
        airQuality: "Tốt",
        humidity: "58",
        temperature: "27",
        dustLevel: "Thấp",
    });

    const [draftEnvironment, setDraftEnvironment] = useState(environment);
    const [isUpdated, setIsUpdated] = useState(false);

    const getAirStatusType = (airQuality) => {
        if (airQuality === "Tốt") return "good";
        if (airQuality === "Trung bình") return "warning";
        if (airQuality === "Kém") return "danger";
        return "info";
    };

    const getHumidityStatus = (humidity) => {
        const humidityNumber = Number(humidity);

        if (humidityNumber < 40) {
            return {
                status: "Quá khô",
                type: "warning",
            };
        }

        if (humidityNumber > 70) {
            return {
                status: "Quá ẩm",
                type: "warning",
            };
        }

        return {
            status: "Phù hợp",
            type: "info",
        };
    };

    const getTemperatureStatus = (temperature) => {
        const temperatureNumber = Number(temperature);

        if (temperatureNumber < 20 || temperatureNumber > 32) {
            return {
                status: "Cần chú ý",
                type: "warning",
            };
        }

        return {
            status: "Ổn định",
            type: "info",
        };
    };

    const getDustStatusType = (dustLevel) => {
        if (dustLevel === "Thấp") return "good";
        if (dustLevel === "Trung bình") return "warning";
        if (dustLevel === "Cao") return "danger";
        return "info";
    };

    const humidityStatus = getHumidityStatus(environment.humidity);
    const temperatureStatus = getTemperatureStatus(environment.temperature);

    const handleChangeEnvironment = (event) => {
        const { name, value } = event.target;

        setDraftEnvironment((currentEnvironment) => ({
            ...currentEnvironment,
            [name]: value,
        }));

        setIsUpdated(false);
    };

    const handleUpdateEnvironment = () => {
        setEnvironment(draftEnvironment);
        setIsUpdated(true);
    };

    return (
        <DashboardLayout
            role="patient"
            title="Thông tin môi trường"
            subtitle="Theo dõi yếu tố môi trường có thể ảnh hưởng đến phục hồi hô hấp."
        >
            <div className="overview-grid">
                <MetricCard
                    label="Chất lượng không khí"
                    value={environment.airQuality}
                    status={environment.airQuality === "Tốt" ? "An toàn" : "Cần theo dõi"}
                    statusType={getAirStatusType(environment.airQuality)}
                />

                <MetricCard
                    label="Độ ẩm"
                    value={`${environment.humidity}%`}
                    status={humidityStatus.status}
                    statusType={humidityStatus.type}
                />

                <MetricCard
                    label="Nhiệt độ"
                    value={`${environment.temperature}°C`}
                    status={temperatureStatus.status}
                    statusType={temperatureStatus.type}
                />

                <MetricCard
                    label="Khói bụi"
                    value={environment.dustLevel}
                    status={environment.dustLevel === "Thấp" ? "Ít rủi ro" : "Cần chú ý"}
                    statusType={getDustStatusType(environment.dustLevel)}
                />
            </div>

            <DashboardPanel title="Cập nhật môi trường sống">
                {isUpdated && (
                    <div className="form-success">
                        <StatusPill type="good">Đã cập nhật</StatusPill>
                        <p>
                            Thông tin môi trường đã được cập nhật. AI sẽ dùng dữ liệu này
                            để đánh giá yếu tố ảnh hưởng đến phục hồi hô hấp.
                        </p>
                    </div>
                )}

                <div className="environment-form">
                    <label>
                        Chất lượng không khí
                        <select
                            name="airQuality"
                            value={draftEnvironment.airQuality}
                            onChange={handleChangeEnvironment}
                        >
                            <option>Tốt</option>
                            <option>Trung bình</option>
                            <option>Kém</option>
                        </select>
                    </label>

                    <label>
                        Độ ẩm (%)
                        <input
                            name="humidity"
                            type="number"
                            value={draftEnvironment.humidity}
                            onChange={handleChangeEnvironment}
                        />
                    </label>

                    <label>
                        Nhiệt độ (°C)
                        <input
                            name="temperature"
                            type="number"
                            value={draftEnvironment.temperature}
                            onChange={handleChangeEnvironment}
                        />
                    </label>

                    <label>
                        Mức khói bụi
                        <select
                            name="dustLevel"
                            value={draftEnvironment.dustLevel}
                            onChange={handleChangeEnvironment}
                        >
                            <option>Thấp</option>
                            <option>Trung bình</option>
                            <option>Cao</option>
                        </select>
                    </label>

                    <button
                        className="primary-button"
                        type="button"
                        onClick={handleUpdateEnvironment}
                    >
                        Cập nhật môi trường
                    </button>
                </div>
            </DashboardPanel>

            <DashboardPanel title="Khuyến nghị môi trường">
                <div className="task-list">
                    <div>
                        <strong>Giữ phòng thông thoáng</strong>
                        <span>Mở cửa hoặc dùng quạt thông khí khi chất lượng không khí tốt.</span>
                    </div>

                    <div>
                        <strong>Tránh khói thuốc và bụi mịn</strong>
                        <span>Không ở gần khu vực có khói, hóa chất hoặc bụi cao.</span>
                    </div>

                    <div>
                        <strong>Duy trì độ ẩm phù hợp</strong>
                        <span>Độ ẩm quá thấp có thể làm đường thở khô và dễ kích ứng.</span>
                    </div>
                </div>
            </DashboardPanel>

            <DashboardPanel title="Các yếu tố AI đang theo dõi">
                <div className="environment-grid">
                    <div>
                        <strong>Không khí trong phòng</strong>
                        <span>Đánh giá mức độ thông thoáng và nguy cơ kích ứng đường thở.</span>
                    </div>

                    <div>
                        <strong>Nhiệt độ</strong>
                        <span>Theo dõi thay đổi nhiệt độ có thể ảnh hưởng đến triệu chứng.</span>
                    </div>

                    <div>
                        <strong>Độ ẩm</strong>
                        <span>Phát hiện môi trường quá khô hoặc quá ẩm.</span>
                    </div>

                    <div>
                        <strong>Khói bụi</strong>
                        <span>Ghi nhận nguy cơ từ bụi mịn, khói thuốc hoặc ô nhiễm.</span>
                    </div>
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}