import styled from "styled-components";
import Input from "../ui/Input";
import ProfileImage from "../ui/ProfileImage";
import TextHelper from "../ui/TextHelper";
import Button from "../ui/Button";
import { useState } from 'react';

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const handleSubmit = () => {
        const data = { email, password, nickname };
        const jsonData = JSON.stringify(data);
        alert(jsonData);
    }
    // const [file, setFile] = useState(null);

    // const handleSubmit = (event) => {
    //     const url = 'http://localhost:3001/members/register';
    //     fetch(url, {
    //         method: 'POST',
    //         // headers: {
    //         //     'Content-Type': 'application/json'
    //         // },
    //         body: realForm, // JSON 데이터를 문자열로 변환하여 전송
    //         contentType: false, // 필수 : x-www-form-urlencoded로 파싱되는 것을 방지
    //         processData: false,  // 필수: contentType을 false로 줬을 때 QueryString 자동 설정됨. 해제
    //     })
    //         .then(response => {
    //             if (response.ok)
    //                 location.href = "/";
    //             return response.json(); // 서버에서 JSON 형식의 응답을 받음
    //         })
    //         .then(data => {
    //             if (data.message === "Invalid_email")
    //                 document.getElementById('helper-text-email').textContent = "*중복된 이메일 입니다.";
    //             else if (data.status === 413)
    //                 alert('파일 크기가 너무 큽니다.');
    //         })
    // }
    return (
        <Form>
            <ProfileImage />
            <Input title="이메일" type="text" placeholder="Email" onChange = {(e)=>setEmail(e.target.value)}/>
            <TextHelper>이메일</TextHelper>
            <Input title="비밀번호" type="password" placeholder="Password" onChange = {(e)=>setPassword(e.target.value)} />
            <TextHelper>비밀번호</TextHelper>
            <Input title="비밀번호 확인" type="password" placeholder="Password"  />
            <TextHelper>비밀번호 확인</TextHelper>
            <Input title="닉네임" type="text" placeholder="Nickname" onChange={(e)=>setNickname(e.target.value)}/>
            <TextHelper>닉네임</TextHelper>
            <Button title="회원가입" onClick={handleSubmit} />
        </Form>
    )
}

export default RegisterForm;