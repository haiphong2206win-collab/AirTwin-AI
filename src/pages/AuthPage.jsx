import { useState } from "react";
/* sử dụng usestate để load trạng thái chọn */
import AppLogo from "../components/common/AppLogo.jsx";

export default function AuthPage() {
    const [role, setRole] = useState("patient");
    /* ban đầu mặc định là bệnh nhân */
    return (
        <main className="auth-page">
            <section className="auth-hero">
                <AppLogo />

                <div className="auth-hero__content">
                    <p className="eyebrow">Clean Medical AI Dashboard</p>

                    <h2>
                        Nền tảng AI theo dõi phục hồi hô hấp tại nhà sau xuất viện.
                    </h2>

                    <p>
                        Theo dõi tiếng ho, triệu chứng, môi trường sống và hỗ trợ bác sĩ
                        phát hiện sớm các dấu hiệu bất thường trong quá trình phục hồi.
                    </p>
                </div>
            </section>

            {/* thêm form đăng nhập  */}
            <section className="auth-card">
                <h2>Đăng nhập</h2>

                <p>Truy cập hệ thống theo dõi phục hồi hô hấp AirTwin AI.</p>

                <form className="auth-form">
                    <label>
                        Email
                        <input type="email" placeholder="Nhập email" />
                    </label>

                    <label>
                        Mật khẩu
                        <input type="password" placeholder="Nhập mật khẩu" />
                    </label>

                    <div>
                        <p className="form-label">Vai trò</p>
                        {/*cho nút “Bệnh nhân / Bác sĩ” bấm được và có trạng thái đang chọn. */}
                        <div className="role-options">
                            {/*khi bấm nút Bệnh nhân thì React đổi role thành "patient".*/}
                            <button type="button"
                                className={role === "patient" ? "active" : ""}
                                onClick={() => setRole("patient")}

                            >Bệnh nhân</button>
                            <button type="button"
                                className={role === "doctor" ? "active" : ""}
                                onClick={() => setRole("doctor")}
                            >Bác sĩ</button>
                        </div>
                    </div>

                    <button type="submit" className="primary-button">
                        Đăng nhập
                    </button>
                </form>

                <p className="auth-switch">
                    Chưa có tài khoản? <button type="button">Đăng ký</button>
                </p>
            </section>

        </main>
    );
}