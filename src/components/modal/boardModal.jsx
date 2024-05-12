import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const ModalBackground = styled.div`
display: block;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 11;
background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경색 */`;

const ModalMain = styled.div`
width: 408px;
height: 242px;
position: fixed;
z-index: 1000;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background-color: white;

border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid;
`;

const ModalQuestion = styled.b`
font-size: 24px;
`;

const Noti = styled.span`
font-size: 20px;
`;

const ModalButtons = styled.div`
width:270px;
height: 44px;
display: flex;
align-items: center;
justify-content: space-around;

`;

const CancelButton = styled.button`
width: 127px;
height: 100%;

border-radius: 12px;
background: #242424;
color:white;
font-size: 20px;
border:none;
`;

const ConfirmButton = styled.button`
width: 127px;
height: 100%;

border-radius: 12px;
background: #C4A5FA;

color:black;
font-size: 20px;
border: none;
`;

function Modal({ onClose }) {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const url = `${BASE_URL}/boards/${boardId}`;

  const handleDelete = () => {
    fetch(url, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
          alert('게시글이 삭제되었습니다');
          navigate('/boards');
        } else if (data.status === 401) {
          alert('로그인 후 이용해주세요');
          navigate('/');
        } else if (data.status === 400) {
          alert('삭제되었거나 없는 게시글입니다');
          navigate('/boards');
        } else if (data.status === 403) {
          alert('본인이 작성한 게시글만 삭제 가능합니다');
        } else {
          alert('게시글 삭제에 실패했습니다');
        }

      })
  }

  return (
    <ModalBackground>
      <ModalMain>
        <ModalQuestion>게시글을 삭제 하시겠습니까?</ModalQuestion>
        <Noti>삭제한 내용은 복구 할 수 없습니다.</Noti>
        <ModalButtons>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton onClick={handleDelete}>확인</ConfirmButton>
        </ModalButtons>
      </ModalMain>
    </ModalBackground>
  );
}

export default Modal;