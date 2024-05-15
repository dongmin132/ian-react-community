import styled from 'styled-components';
import TextHelper from '../ui/TextHelper';
import Button from "../ui/Button"
import { useState } from 'react';
import Input from '../ui/Input';
import { useAuth } from '../../context/AuthContext';
import Loading from '../ui/Loading';
import { useNavigate } from 'react-router-dom';

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
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {setIsLoggedIn} = useAuth(); 
    const navigate = useNavigate();
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const url = `${BASE_URL}/members/login`;
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

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
            setTimeout(() => {
                setIsLoggedIn(true);
                alert("로그인 성공");
                setIsLoading(false);
                navigate("/boards");
            }, 3000);
        } else {
            alert("로그인 실패");
            setIsLoading(false);
        }
    };
    return (
        <Form>
            <Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} title = "이메일"/>
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} title = "비밀번호" />
            <TextHelper>아직 회원이 아니신가요?</TextHelper>
            <Button onClick={handleSubmit} title="로그인" >Log in</Button>
            {isLoading && <Loading/>}
        </Form>
    );
}

export default LogginForm;