import { useEffect, useState } from "react";
import ProfileUpdate from "../components/member-update-form/ProfileUpdate";
import MemberUpdateForm from "../components/member-update-form/MemberUpdateForm";
import styled from "styled-components";
import MemberModal from "../components/modal/MemberModal";
import { useNavigate } from "react-router-dom";
import Toast from "../components/ui/Toast";
import Form from "../components/ui/Form";


const CloseAccount = styled.span`
font-size: 14px;
width: fit-content;
cursor: pointer;
margin-top: 20px;
`

const MemberUpdate = () => {
    const [modal, setModal] = useState(false);
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null); //이미지 미리보기
    const [users, setUsers] = useState({});
    const [toast, setToast] = useState(false);

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate();

    const handleUpdateSuccess = () => {
        setToast(true);
    }

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(false), 3000); // 3초 후에 토스트 메시지 숨기기
            return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 제거
        }
    }, [toast]);

    useEffect(() => {
        setImage(`${BASE_URL}${users.profile_image}`);
        fetch(`${BASE_URL}/members/getMember`, {
            credentials: 'include'
        })
            .then((response) => response.json())
            .then(data => {
                if (data.status === 200) {
                    const member = data.member;
                    setUsers(member);
                    setImage(`${BASE_URL}${member.memberProfileImage}`);
                } else if (data.status === 401) {
                    alert("로그인 후 이용하세요")
                    navigate("/");
                } else {
                    alert("사용자를 찾을 수 없습니다.")
                    navigate("/");
                }
            })
    }, [])



    const handleFileChange = (e) => {
        const selectFile = e.target.files[0];
        if (selectFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setFile(selectFile);
            };
            reader.readAsDataURL(selectFile);
        } else {
            setImage(`${BASE_URL}${users.memberProfileImage}`);
            setFile(null);
        }
    }

    //회원 탈퇴 모달창 열기
    const handleOpenModal = () => {
        setModal(true);
    }

    // 모달의 상태가 변경될 때마다 실행되는 useEffect
    useEffect(() => {
        if (modal) {
            // 모달이 열릴 때 body의 overflow를 hidden으로 설정
            document.body.style.overflow = 'hidden';
        } else {
            // 모달이 닫힐 때 body의 overflow를 원래대로 복구
            document.body.style.overflow = 'unset';
        }
    }, [modal]);

    return (
        <>
            <Form>
                <ProfileUpdate profileImage={image} onChange={handleFileChange} />
                <MemberUpdateForm member={users} file={file} onUpdateSuccess={handleUpdateSuccess} />
                <CloseAccount onClick={handleOpenModal}>회원 탈퇴</CloseAccount>
            </Form >
            {modal && <MemberModal onClose={() => setModal(false)} />}
            {toast && <Toast />}
        </>
    )

}

export default MemberUpdate;