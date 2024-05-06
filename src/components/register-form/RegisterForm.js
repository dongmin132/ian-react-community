import styled from "styled-components";
import Input from "../ui/Input";
import ProfileImage from "../ui/ProfileImage";
import TextHelper from "../ui/TextHelper";

const Form = styled.form`
display: flex;
align-items: center;
width: 339px;
height: auto;
justify-content: center;
flex-direction: column;
font-weight: bold;
`

const RegisterForm = () => {
    return ( 
        <Form>
            <ProfileImage />
            <Input title="이메일" type="text" placeholder="Email" />
            <TextHelper>이메일</TextHelper>
            <Input title="비밀번호" type="password" placeholder="Password" />
            <TextHelper>비밀번호</TextHelper>
            <Input title="비밀번호 확인" type="password" placeholder="Password" />
            <TextHelper>비밀번호 확인</TextHelper>
            <Input title="닉네임" type="text" placeholder="Nickname" />
            <TextHelper>닉네임</TextHelper>
        </Form>
    )
}

export default RegisterForm;