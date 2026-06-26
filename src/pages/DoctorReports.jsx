import DashboardLayout from "../layouts/DashboardLayout.jsx";

export default function DoctorReports() {
    return (
        <DashboardLayout
            role="doctor"
            title="Báo cáo AI"
            subtitle="Tóm tắt tình hình phục hồi và các nhóm bệnh nhân cần ưu tiên."
        >
            <section className="dashboard-panel">
                <h2>Báo cáo tổng quan tuần này</h2>

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
            </section>

            <section className="dashboard-panel">
                <h2>AI Summary</h2>

                <p className="ai-summary">
                    Trong tuần này, đa số bệnh nhân có xu hướng phục hồi tích cực. Tuy nhiên,
                    một nhóm nhỏ có tần suất ho tăng, mức chú ý lâm sàng cao hơn và cần bác sĩ
                    xem xét thêm. AirTwin AI đề xuất ưu tiên kiểm tra các bệnh nhân có Clinical
                    Attention Level cao hoặc có cảnh báo liên tục trong 48 giờ gần nhất.
                </p>
            </section>

            <section className="dashboard-panel">
                <h2>Khuyến nghị ưu tiên</h2>

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
            </section>
        </DashboardLayout>
    );
}