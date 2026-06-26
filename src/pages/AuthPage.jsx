import { useState } from "react";
/* sử dụng usestate để load trạng thái chọn */

import { useNavigate } from "react-router";
/* công cụ của React Router để chuyển trang */
import AppLogo from "../components/common/AppLogo.jsx";


//  check lỗi ko điền 
const initialForm = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
};




export default function AuthPage() {

    const navigate = useNavigate();
    // hàm navigate() để điều hướng trang.
    const [role, setRole] = useState("patient");
    /* ban đầu mặc định là bệnh nhân */

    // tap login 
    const [mode, setMode] = useState("login");
    const isLogin = mode === "login";
    //mode dùng để biết người dùng đang ở form nào


    //Thêm state cho form và lỗi
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState("");


    // hàm xử lý khi nhập input
    function handleChange(event) {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value,
        });
    }



    // ham xử lý đăng nhập 
    function handleLogin(event) {
        event.preventDefault();
        setError("");

        if (!form.email || !form.password) {
            setError("Vui lòng nhập email và mật khẩu.");
            return;
        }

        if (!isLogin && !form.fullName) {
            setError("Vui lòng nhập họ và tên.");
            return;
        }

        if (!isLogin && form.password !== form.confirmPassword) {
            setError("Mật khẩu xác nhận chưa trùng khớp.");
            return;
        }

        if (role === "patient") {
            navigate("/patient/overview");
        } else {
            navigate("/doctor/overview");
        }
    }

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
                {/*đổi tiêu đề theo mode  */}
                <h2> {isLogin ? "Đăng nhập" : "Đăng ký tài khoản"}</h2>

                <p> {isLogin
                    ? "Truy cập hệ thống theo dõi phục hồi hô hấp AirTwin AI."
                    : "Tạo tài khoản để bắt đầu sử dụng AirTwin AI."} </p>


                <form className="auth-form" onSubmit={handleLogin}>
                    {/* khi submit sẽ gọi hàm */}

                    {!isLogin && (
                        <label>
                            Họ và tên
                            <input
                                type="text"
                                name="fullName"
                                value={form.fullName}
                                placeholder="Nhập họ tên"
                                onChange={handleChange}
                            />
                        </label>
                    )}

                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder="Nhập email"
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Mật khẩu
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            placeholder="Nhập mật khẩu"
                            onChange={handleChange}
                        />
                    </label>
                    {!isLogin && (
                        <label>
                            Xác nhận mật khẩu
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                placeholder="Nhập lại mật khẩu"
                                onChange={handleChange}
                            />
                        </label>
                    )}

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

                    {/*đổi nút submit*/}
                    {error && <p className="form-error">{error}</p>}
                    <button type="submit" className="primary-button">
                        {isLogin ? "Đăng nhập" : "Tạo tài khoản"}
                    </button>
                </form>

                {/* đổi dòng cuối form */}
                <p className="auth-switch">
                    {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{" "}
                    <button
                        type="button"
                        onClick={() => setMode(isLogin ? "register" : "login")}
                    >
                        {isLogin ? "Đăng ký" : "Đăng nhập"}
                    </button>
                </p>
            </section>

        </main>
    );
}