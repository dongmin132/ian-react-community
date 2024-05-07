import styled from 'styled-components';
import TextHelper from '../ui/TextHelper';
import Button from "../ui/Button"
import { useState } from 'react';
import Input from '../ui/Input';
const Form = styled.form`
display: flex;
align-items: center;
width: 339px;
height: auto;
justify-content: center;
flex-direction: column;
font-weight: bold;
`


const LogginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const data = { email, password };
        const jsonData = JSON.stringify(data);

        // 로그인 처리 로직
        const response = await fetch('http://localhost:3001/members/login', {
            method: 'post',

            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData,
            credentials: "include"
        });
        if (response.ok) {          
            console.log("여러번 실행되나요?")  
            setTimeout(() => {
                alert("로그인 성공");
                setIsSubmitting(false);
            }, 3000);
        } else {
            alert(jsonData)
            setIsSubmitting(false);
            alert("로그인 실패");
        }
        
    };
    return (
        <Form>
            <Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} title = "이메일"/>
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} title = "비밀번호" />
            <TextHelper>아직 회원이 아니신가요?</TextHelper>
            <Button onClick={handleSubmit} title="로그인" >Log in</Button>
        </Form>
    );
}

export default LogginForm;