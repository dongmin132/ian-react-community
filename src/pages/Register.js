import RegisterForm from "../components/register-form/RegisterForm";
import Button from "../components/ui/Button";
import ProfileImage from "../components/ui/ProfileImage";
import Title from "../components/ui/Title";

const Register = () => {
    return (
        <>
            <Title title="회원가입" />
            <RegisterForm />
            <Button title="회원가입"></Button>
            <a href="/login" style={{ textDecoration: 'none', color:'black'}}>로그인하러가기</a >
        </>
    );
}
export default Register;