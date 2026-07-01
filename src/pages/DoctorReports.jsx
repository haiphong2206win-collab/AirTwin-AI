import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";

const initialReports = [
    {
        id: 1,
        patientName: "Nguyễn Minh Anh",
        type: "Báo cáo phục hồi hằng ngày",
        status: "Đã xem",
    },
    {
        id: 2,
        patientName: "Trần Quốc Bảo",
        type: "Ghi âm tiếng ho",
        status: "Chưa xem",
    },
    {
        id: 3,
        patientName: "Lê Thị Hương",
        type: "Câu hỏi triệu chứng",
        status: "Cần xử lý",
    },
];

export default function DoctorReports() {
    const [reports, setReports] = useState(initialReports);

    const getStatusType = (status) => {
        if (status === "Đã xem" || status === "Đã xử lý") return "good";
        if (status === "Chưa xem") return "warning";
        if (status === "Cần xử lý") return "danger";
        return "info";
    };

    const handleUpdateReport = (reportId) => {
        setReports((currentReports) =>
            currentReports.map((report) => {
                if (report.id !== reportId) return report;

                if (report.status === "Chưa xem") {
                    return { ...report, status: "Đã xem" };
                }

                if (report.status === "Cần xử lý") {
                    return { ...report, status: "Đã xử lý" };
                }

                return report;
            })
        );
    };

    return (
        <DashboardLayout
            role="doctor"
            title="Báo cáo AI"
            subtitle="Tóm tắt tình hình phục hồi và các nhóm bệnh nhân cần ưu tiên."
        >
            <DashboardPanel title="Báo cáo tổng quan tuần này">
                <div className="report-grid">
                    <div>
                        <strong>15 bệnh nhân đang cải thiện</strong>
                        <span>
                            Phần lớn có xu hướng giảm ho, triệu chứng ổn định và ít cảnh báo mới.
                        </span>
                    </div>

                    <div>
                        <strong>6 bệnh nhân cần chú ý</strong>
                        <span>
                            Nhóm này có biến động nhẹ về triệu chứng hoặc môi trường sống chưa ổn định.
                        </span>
                    </div>

                    <div>
                        <strong>3 bệnh nhân nguy cơ cao</strong>
                        <span>
                            AI đề xuất bác sĩ ưu tiên kiểm tra vì có tín hiệu bất thường lặp lại.
                        </span>
                    </div>
                </div>
            </DashboardPanel>

            <DashboardPanel title="AI Summary">
                <p className="ai-summary">
                    Trong tuần này, đa số bệnh nhân có xu hướng phục hồi tích cực. Tuy nhiên,
                    một nhóm nhỏ có tần suất ho tăng, mức chú ý lâm sàng cao hơn và cần bác sĩ
                    xem xét thêm. AirTwin AI đề xuất ưu tiên kiểm tra các bệnh nhân có Clinical
                    Attention Level cao hoặc có cảnh báo liên tục trong 48 giờ gần nhất.
                </p>
            </DashboardPanel>

            <DashboardPanel title="Danh sách báo cáo mới">
                <div className="report-grid">
                    {reports.map((report) => (
                        <div key={report.id}>
                            <strong>{report.patientName}</strong>
                            <span>{report.type}</span>

                            <StatusPill type={getStatusType(report.status)}>
                                {report.status}
                            </StatusPill>

                            {(report.status === "Chưa xem" || report.status === "Cần xử lý") && (
                                <button
                                    className="report-action"
                                    type="button"
                                    onClick={() => handleUpdateReport(report.id)}
                                >
                                    {report.status === "Chưa xem"
                                        ? "Đánh dấu đã xem"
                                        : "Đã xử lý"}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </DashboardPanel>

            <DashboardPanel title="Khuyến nghị ưu tiên">
                <div className="report-grid">
                    <div>
                        <strong>Ưu tiên 1</strong>
                        <span>
                            Kiểm tra bệnh nhân có ho tăng nhanh, khó thở hoặc cảnh báo nguy cơ cao.
                        </span>
                    </div>

                    <div>
                        <strong>Ưu tiên 2</strong>
                        <span>
                            Theo dõi nhóm bệnh nhân có môi trường sống không ổn định như bụi cao,
                            độ ẩm thấp hoặc nhiệt độ thay đổi.
                        </span>
                    </div>

                    <div>
                        <strong>Ưu tiên 3</strong>
                        <span>
                            Nhắc bệnh nhân hoàn thành ghi âm tiếng ho và câu hỏi sức khỏe hằng ngày.
                        </span>
                    </div>
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}