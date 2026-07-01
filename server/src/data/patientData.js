export const patientProfile = {
    name: "Dương Ngọc Quang",
    age: 42,
    disease: "Viêm phổi",
    dischargeDate: "15/06/2026",
    recoveryDay: 12,
    recoveryStatus: "Đang cải thiện",
    riskLevel: "low",
};

export const patientMetrics = [
    {
        id: 1,
        label: "SpO2",
        value: "97%",
        note: "Trong ngưỡng an toàn",
        status: "good",
    },
    {
        id: 2,
        label: "Nhịp tim",
        value: "78 bpm",
        note: "Ổn định",
        status: "good",
    },
    {
        id: 3,
        label: "Mức ho",
        value: "Nhẹ",
        note: "Giảm so với hôm qua",
        status: "info",
    },
    {
        id: 4,
        label: "Tiến độ phục hồi",
        value: "72%",
        note: "Đang cải thiện tốt",
        status: "good",
    },
];

export const todayTasks = [
    {
        id: 1,
        title: "Đo SpO2 buổi sáng",
        description: "Cập nhật chỉ số oxy trong máu sau khi thức dậy.",
        status: "done",
    },
    {
        id: 2,
        title: "Ghi âm tiếng ho",
        description: "Gửi mẫu âm thanh ho để hệ thống phân tích.",
        status: "pending",
    },
    {
        id: 3,
        title: "Trả lời câu hỏi triệu chứng",
        description: "Cập nhật tình trạng khó thở, mệt mỏi, đau ngực.",
        status: "pending",
    },
    {
        id: 4,
        title: "Bài tập thở 5 phút",
        description: "Thực hiện bài tập thở phục hồi chức năng hô hấp.",
        status: "done",
    },
];

export const recoveryTimeline = [
    {
        id: 1,
        day: "Ngày 1",
        title: "Xuất viện",
        description: "Bắt đầu theo dõi phục hồi tại nhà.",
    },
    {
        id: 2,
        day: "Ngày 5",
        title: "Ho giảm nhẹ",
        description: "Tần suất ho giảm, SpO2 ổn định hơn.",
    },
    {
        id: 3,
        day: "Ngày 9",
        title: "Cải thiện hô hấp",
        description: "Ít khó thở hơn khi vận động nhẹ.",
    },
    {
        id: 4,
        day: "Hôm nay",
        title: "Tiếp tục phục hồi",
        description: "Các chỉ số đang nằm trong vùng an toàn.",
    },
];