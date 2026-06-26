import DashboardLayout from "../layouts/DashboardLayout.jsx";
//muốn dùng layout thì phải import nó vào page.
//Mình sẽ không dùng <main> riêng nữa, vì DashboardLayout đã có <main> rồi.




export default function PatientOverview() {
    // tạo component
    return (

        <DashboardLayout
            /*bọc nội dung - dashboard để truyền dữ liệu từ page vào layout */
            role="patient"
            title="Tổng quan phục hồi"
            subtitle="Theo dõi trạng thái phục hồi hô hấp sau xuất viện."
        >
            <div className="overview-grid">
                {/*vùng chứa các thẻ thống kê nhanh */}
                {/*className="metric-card" =dùng để tạo giao diện dạng card.  */}

                <article className="metric-card">
                    {/*hiển thị trạng thái phục hồi tổng quát của bệnh nhân. */}
                    <p>Recovery Status</p>
                    <h2>Đang cải thiện</h2>
                    <span className="status-pill status-pill--good">Tốt</span>
                </article>

                <article className="metric-card">
                    {/*mức độ cần bác sĩ chú ý. */}
                    <p>Clinical Attention</p>
                    <h2>Trung bình</h2>
                    <span className="status-pill status-pill--warning">Cần theo dõi</span>
                </article>

                <article className="metric-card">
                    {/*xu hướng tiếng ho. */}
                    <p>Cough Trend</p>
                    <h2>Giảm 18%</h2>
                    <span className="status-pill status-pill--good">So với hôm qua</span>
                </article>

                <article className="metric-card">
                    {/*rủi ro từ môi trường sống.*/}
                    <p>Environment Risk</p>
                    <h2>Thấp</h2>
                    <span className="status-pill status-pill--info">Ổn định</span>
                </article>
            </div>

            <section className="dashboard-panel">
                {/*hiển thị danh sách nhiệm vụ mà bệnh nhân cần làm trong ngày. */}
                <h2>Nhiệm vụ hôm nay</h2>

                <div className="task-list">
                    <div>
                        <strong>Ghi âm tiếng ho</strong>
                        <span>Thời lượng đề xuất: 20 giây</span>
                    </div>

                    <div>
                        <strong>Trả lời câu hỏi triệu chứng</strong>
                        <span>Khó thở, đau ngực, mệt mỏi, sốt</span>
                    </div>

                    <div>
                        <strong>Cập nhật môi trường sống</strong>
                        <span>Không khí, nhiệt độ, độ ẩm, khói bụi</span>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
}