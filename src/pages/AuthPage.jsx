import AppLogo from "../components/common/AppLogo.jsx";

export default function AuthPage() {
    return (
        <main className="auth-page">
            <section className="auth-hero">
                <AppLogo />

                <div>
                    <p>Clean Medical AI Dashboard</p>

                    <h2>
                        Nền tảng AI theo dõi phục hồi hô hấp tại nhà sau xuất viện.
                    </h2>

                    <p>
                        Theo dõi tiếng ho, triệu chứng, môi trường sống và hỗ trợ bác sĩ
                        phát hiện sớm các dấu hiệu bất thường trong quá trình phục hồi.
                    </p>
                </div>
            </section>
        </main>
    );
}