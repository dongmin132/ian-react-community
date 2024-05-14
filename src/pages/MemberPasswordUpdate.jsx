import Input from "../components/ui/Input";
import Form from "../components/ui/Form";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Toast from "../components/ui/Toast";

const MemberPassowrdUpdate = () => {
    const [toast, setToast] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const url = `${BASE_URL}/members/password`;
    const handlePasswordUpdate = (event) => {
        event.preventDefault();
        
        fetch(url, {
            method:'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ password }),
            credentials: 'include'
        })
        .then((response) => response.json())
        .then((data)=> {
            if(data.status===200) {
                setToast(true);
                alert("수정 완료");
            } else if(data.status === 404 ) {
                alert("회원이 없습니다")
            } else if(data.status ===401) {
                alert("로그인 후 이용해주세요")
            }
        })
    }

    //toast 메시지
    useEffect(function toastMessage() {
        if(toast) {
            const timer = setTimeout(() => setToast(false), 3000); // 3초 후에 토스트 메시지 숨기기
            return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 제거
        }
    }, [toast]);

    return (
        <>
        <Title title="비밀번호 수정" />
        <Form>
            <Input type = "text"  title = "비밀번호" placeholder = "비밀번호를 입력하세요" onChange = {(e)=> setPassword(e.target.value)}/>
            <Input type = "text"  title = "비밀번호 확인" placeholder = "비밀번호를 한번 더 입력하세요"/>
            <Button title="수정하기" onClick={handlePasswordUpdate}/>
            
        </Form>
        {toast && <Toast />}
        </>
    )
}

export default MemberPassowrdUpdate;