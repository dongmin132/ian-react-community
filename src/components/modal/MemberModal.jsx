import { useNavigate } from 'react-router-dom';

import { ModalBackground, ModalMain, ModalQuestion, Noti, ModalButtons, CancelButton, ConfirmButton } from './styledModal';
import { useAuth } from '../../context/AuthContext';


function MemberModal({ onClose }) {
  const {setIsLoggedIn} = useAuth();
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  
  const handleDelete = async () => {
    const url = `${BASE_URL}/members`
    const response = await fetch(url, {
        method: 'DELETE',
        credentials: "include"
    })
    const data = await response.json();
        if(data.status===200) {
            alert("회원 탈퇴")
            setIsLoggedIn(false)
            navigate("/")
        }
        else if(data.status==404) {
            alert("사용자를 찾을 수 없습니다.")
        }
        else if(data.status===401) {
            alert("로그인 후 이용하세요")
        }
    }

  return (
    <ModalBackground>
      <ModalMain>
        <ModalQuestion>회원탈퇴 하시겠습니까?</ModalQuestion>
        <Noti>작성된 게시글과 댓글은 삭제됩니다.</Noti>
        <ModalButtons>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton onClick={handleDelete}>확인</ConfirmButton>
        </ModalButtons>
      </ModalMain>
    </ModalBackground>
  );
}



export default MemberModal;