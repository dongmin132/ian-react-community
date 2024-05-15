import styled from "styled-components";
import Input from "../ui/Input";
import ProfileImage from "../ui/ProfileImage";
import TextHelper from "../ui/TextHelper";
import Button from "../ui/Button";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
    const src = null;
    const defaultImage = `${process.env.PUBLIC_URL}/images/default-profile.png`;
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState(src || defaultImage);   //이미지 미리보기
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setSelectedFile(file);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(defaultImage);
            setSelectedFile(defaultImage)
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('nickname', nickname);
        formData.append('profileImage', selectedFile);

        const url = `${BASE_URL}/members/register`;
        
        fetch(url, {
            method: 'POST',
            body: formData, // JSON 데이터를 문자열로 변환하여 전송
            // contentType: false, // 필수 : x-www-form-urlencoded로 파싱되는 것을 방지
            processData: false,  // 필수: contentType을 false로 줬을 때 QueryString 자동 설정됨. 해제
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 201){
                    alert('회원가입 성공');
                    navigate("/");
                }
                    
                else if (data.status === 409)
                    alert('이미 존재하는 이메일입니다.');
                else if (data.status === 413)
                    alert('파일 크기가 너무 큽니다.');
            })
    }

    return (
        <Form>
            <ProfileImage image={image} onChange={handleFileChange} />
            <Input title="이메일" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <TextHelper>이메일</TextHelper>
            <Input title="비밀번호" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <TextHelper>비밀번호</TextHelper>
            <Input title="비밀번호 확인" type="password" placeholder="Password" />
            <TextHelper>비밀번호 확인</TextHelper>
            <Input title="닉네임" type="text" placeholder="Nickname" onChange={(e) => setNickname(e.target.value)} />
            <TextHelper>닉네임</TextHelper>
            <Button title="회원가입" onClick={handleSubmit} />
        </Form>
    )
}

export default RegisterForm;