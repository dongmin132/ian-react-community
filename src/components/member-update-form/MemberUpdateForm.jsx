import styled from 'styled-components';
import Button from '../ui/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UpdateForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
gap: 20px;
`
const EmailLabel = styled.b`
    font-size: 15px;
    align-self: flex-start;
`;
const Email = styled.span`margin-bottom: 20px;`;
const NicknameLabel = styled.b`
    font-size: 15px;
`;
const NicknameInput = styled.input`
    height: 33px;
    width: 330px;
    :placeholder {
        color:black;
    }
`;
const HelperText = styled.span``;


function MemberUpdateForm({ member, file, onUpdateSuccess }) {
    const defaultNickname = member.nickname;
    const [nickname, setNickname] = useState('');
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const url = `${BASE_URL}/members`;
    const navigate = useNavigate();

    useEffect(() => {
        setNickname(member.nickname || '');
    },[member.nickname]);

    const handleUpdate = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('nickname', nickname);
        if (file !== null)
            formData.append('profileImage', file);

        fetch(url, {
            method: 'PATCH',
            body: formData,
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    onUpdateSuccess();
                    alert("수정 가능한 닉네임입니다");

                } else if (data.status == 400) {
                    alert("*중복된 닉네임입니다."); 
                } else if (data.status === 413) {
                    alert('파일 크기가 너무 큽니다. \n최대 3MB까지 가능합니다.');
                }
            })
    }
    
    return (
        <UpdateForm>
            <EmailLabel>이메일</EmailLabel>
            <Email>{member.email}</Email>
            <NicknameLabel>닉네임</NicknameLabel>
            <NicknameInput type="text" value={nickname} onChange={(e) => (setNickname(e.target.value))} />
            <Button title="수정하기" onClick={handleUpdate}></Button>
        </UpdateForm>
    );
}

export default MemberUpdateForm;