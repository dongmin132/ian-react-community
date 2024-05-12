import React, { useContext, useState } from 'react';

import { Section, Meta, Comment, Circle, Img, Date, BoardButtons, Button } from './BoardInfoStyled';
import { UserIdContext } from '../../pages/BoardDetail';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/boardModal';

function BoardInfo({ board }) {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const userId = useContext(UserIdContext).userId;
  const [modal, setModal] = useState(false);


  //수정 버튼 클릭 시 수정 페이지로 이동
  const handleUpdate = () => {
    navigate(`/boards/update`);
  }

  //삭제 버튼 클릭 시 삭제 모달 띄움
  const handleDelete = () => {
    setModal(true)
  }

  return (
    <Section>
      <span style={{ fontSize: "24px", width: "fit-content" }}><b>{board.title}</b></span>
      <Meta className="meta">
        <Comment>
          <Circle className="circle"><Img src={BASE_URL + board.memberProfileImage} alt="Profile" /></Circle>
          <b id="writer">{board.memberNickname}</b>
        </Comment>
        <Date> {board.createAt}</Date>
        {userId === board.userId ? <BoardButtons className="board-buttons">
          <Button onClick={handleUpdate}>수정</Button>
          <Button onClick={handleDelete}>삭제</Button>
          {modal ? <Modal onClose={() => setModal(false)}/> : <></>}
        </BoardButtons> : <></>}
      </Meta>
    </Section>
  );
}

export default BoardInfo;