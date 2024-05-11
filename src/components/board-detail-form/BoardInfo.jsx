import React from 'react';

import { Section, Meta, Comment, Circle, Img, Date, BoardButtons, Button } from './BoardInfoStyled';

function BoardInfo({board}) {
  const BASE_URL = process.env.REACT_APP_BASE_URL; 
  return (
    <Section>
      <span style={{fontSize: "24px",width: "fit-content"}}><b>{board.title}</b></span>
      <Meta className="meta">
        <Comment>
          <Circle className="circle"><Img src={BASE_URL+board.memberProfileImage} alt="Profile" /></Circle>
          <b id="writer">{board.memberNickname}</b>
        </Comment>
        <Date> {board.createAt}</Date>
        <BoardButtons className="board-buttons">
          <Button>수정</Button>
          <Button>삭제</Button> 
        </BoardButtons>
      </Meta>
    </Section>
  );
}

export default BoardInfo;