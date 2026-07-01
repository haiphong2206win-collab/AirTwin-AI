import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import StatusPill from "../components/dashboard/StatusPill.jsx";
import MetricCard from "../components/dashboard/MetricCard.jsx";
import DashboardPanel from "../components/dashboard/DashboardPanel.jsx";

export default function DoctorPatientDetail() {
    const [reminderSent, setReminderSent] = useState(false);
    const [note, setNote] = useState("");
    const [savedNotes, setSavedNotes] = useState([]);

    const handleSendReminder = () => {
        setReminderSent(true);
    };

    const handleSaveNote = () => {
        const trimmedNote = note.trim();

        if (!trimmedNote) return;

        const newNote = {
            id: Date.now(),
            content: trimmedNote,
        };

        setSavedNotes([newNote, ...savedNotes]);
        setNote("");
    };

    return (
        <DashboardLayout
            role="doctor"
            title="Chi tiết bệnh nhân"
            subtitle="Xem hồ sơ phục hồi, cảnh báo và giải thích AI của một bệnh nhân."
        >
            <div className="overview-grid">
                <MetricCard
                    label="Bệnh nhân"
                    value="Trần Quốc Huy"
                    status="Ưu tiên cao"
                    statusType="danger"
                />

                <MetricCard
                    label="Recovery Status"
                    value="Cần chú ý"
                    status="Theo dõi sát"
                    statusType="warning"
                />

                <MetricCard
                    label="Cough Trend"
                    value="Tăng 24%"
                    status="Bất thường"
                    statusType="danger"
                />

                <MetricCard
                    label="Environment Risk"
                    value="Trung bình"
                    status="Có yếu tố kích ứng"
                    statusType="warning"
                />
            </div>

            <DashboardPanel title="Thao tác của bác sĩ">
                {reminderSent && (
                    <p className="form-success-text">
                        Đã gửi nhắc nhở cho bệnh nhân Trần Quốc Huy.
                    </p>
                )}

                <div className="doctor-action-box">
                    <button
                        className="primary-button"
                        type="button"
                        onClick={handleSendReminder}
                    >
                        Gửi nhắc nhở bệnh nhân
                    </button>

                    <label>
                        Ghi chú của bác sĩ
                        <textarea
                            value={note}
                            placeholder="Nhập ghi chú theo dõi cho bệnh nhân..."
                            onChange={(event) => setNote(event.target.value)}
                        />
                    </label>

                    <button
                        className="report-action"
                        type="button"
                        onClick={handleSaveNote}
                    >
                        Lưu ghi chú
                    </button>
                </div>

                {savedNotes.length > 0 && (
                    <div className="note-list">
                        {savedNotes.map((savedNote) => (
                            <div key={savedNote.id}>
                                <strong>Ghi chú mới</strong>
                                <span>{savedNote.content}</span>
                            </div>
                        ))}
                    </div>
                )}
            </DashboardPanel>

            <DashboardPanel title="Explainable Recovery Status">
                <div className="explain-list">
                    <div>
                        <strong>Lý do AI đánh giá cần chú ý</strong>
                        <span>
                            Tiếng ho tăng, triệu chứng khó thở nhẹ xuất hiện lại và môi trường
                            có độ ẩm thấp trong 2 ngày gần đây.
                        </span>
                    </div>

                    <div>
                        <strong>Yếu tố tích cực</strong>
                        <span>
                            Không ghi nhận sốt cao, SpO₂ mô phỏng vẫn ổn định và bệnh nhân vẫn
                            hoàn thành nhiệm vụ hằng ngày.
                        </span>
                    </div>

                    <div>
                        <strong>Khuyến nghị cho bác sĩ</strong>
                        <span>
                            Nên xem lại bản ghi tiếng ho gần nhất và cân nhắc nhắc bệnh nhân
                            tái đánh giá nếu triệu chứng tiếp tục tăng.
                        </span>
                    </div>
                </div>
            </DashboardPanel>

            <DashboardPanel title="Dữ liệu theo dõi gần đây">
                <div className="patient-table">
                    <div className="patient-table__row patient-table__row--head">
                        <span>Ngày</span>
                        <span>Tiếng ho</span>
                        <span>Triệu chứng</span>
                        <span>Môi trường</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>Hôm nay</strong>
                        <StatusPill type="danger">Tăng</StatusPill>
                        <span>Khó thở nhẹ</span>
                        <span>Độ ẩm thấp</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>Hôm qua</strong>
                        <StatusPill type="warning">Tăng nhẹ</StatusPill>
                        <span>Ho nhiều buổi tối</span>
                        <span>Ổn định</span>
                    </div>

                    <div className="patient-table__row">
                        <strong>2 ngày trước</strong>
                        <StatusPill type="info">Ổn định</StatusPill>
                        <span>Không sốt</span>
                        <span>Bụi thấp</span>
                    </div>
                </div>
            </DashboardPanel>
        </DashboardLayout>
    );
}