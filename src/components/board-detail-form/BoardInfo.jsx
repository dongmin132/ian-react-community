import React, { useContext, useEffect, useState } from 'react';

import { Section, Meta, Comment, Circle, Img, Date, BoardButtons, Button } from './BoardInfoStyled';
import { UserIdContext } from '../../pages/BoardDetail';
import { useNavigate } from 'react-router-dom';
import BoardModal from '../modal/BoardModal';

function BoardInfo({ board }) {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const userId = useContext(UserIdContext).userId;
  const [modal, setModal] = useState(false);


  //수정 버튼 클릭 시 수정 페이지로 이동
  const handleUpdate = () => {
    navigate(`/boards/update`, { state: {board} });
  }

  //삭제 버튼 클릭 시 삭제 모달 띄움
  const handleDelete = () => {
    setModal(true)
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
    <Section>
      <span style={{ fontSize: "24px", width: "fit-content" }}><b>{board.boardTitle}</b></span>
      <Meta className="meta">
        <Comment>
          <Circle className="circle"><Img src={BASE_URL + board.memberProfileImage} alt="Profile" /></Circle>
          <b id="writer">{board.memberNickname}</b>
        </Comment>
        <Date> {board.createAt}</Date>
        {userId === board.memberId ? <BoardButtons className="board-buttons">
          <Button onClick={handleUpdate}>수정</Button>
          <Button onClick={handleDelete}>삭제</Button>
          {modal ? <BoardModal onClose={() => setModal(false)}/> : <></>}
        </BoardButtons> : <></>}
      </Meta>
    </Section>
  );
}

export default BoardInfo;