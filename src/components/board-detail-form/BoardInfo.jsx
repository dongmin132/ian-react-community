import React from 'react';

import { Section, Meta, Comment, Circle, Img, Date, BoardButtons, Button } from './BoardInfoStyled';

function BoardInfo() {

  return (
    <Section>
      <span style={{fontSize: "24px",width: "fit-content"}}><b>제목1</b></span>
      <Meta className="meta">
        <Comment>
          <Circle className="circle"><Img src="" alt="Profile" /></Circle>
          <b id="writer">더미 작성자 1</b>
        </Comment>
        <Date> 2021-01-01 00:00:00</Date>
        <BoardButtons className="board-buttons">
          <Button>수정</Button>
          <Button>삭제</Button> 
        </BoardButtons>
      </Meta>
    </Section>
  );
}

export default BoardInfo;