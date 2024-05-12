import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ModalBackground, ModalMain, ModalQuestion, Noti, ModalButtons, CancelButton, ConfirmButton } from './styledModal';

function BoardModal({ onClose }) {
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

export default BoardModal;