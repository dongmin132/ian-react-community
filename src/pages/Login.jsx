import LoginForm from "../components/login-form/LoginForm"
import Title from '../components/ui/Title';


const Login = () => {
    return (
        <>
            <Title title="로그인" />
            <LoginForm />
            <a href="/register">회원가입</a>
        </>
    );
}
export default Login;