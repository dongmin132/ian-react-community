import React from "react";
import styled from "styled-components";
import { Content, Title, Meta, Info, InfoP, Coment, Circle } from "./BoardListItemStyled";
import { BASE_URL } from "../../config/BaseUrl";
const StyledBoardListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 592px;
    height: 169px;
    margin: 30px ;
    border-radius: 16px;
    box-shadow: 3px 4px 4px 0px #CCCCCC40;
    cursor: pointer;
    background-color: white;

    padding: 10px 20px;
    &:hover {
        background: lightgrey;
    }
`;

const BoardListItem = ({ board, onClick }) => {
    return (
        <StyledBoardListItem onClick={onClick}>
            <Content>
                <Title>{board.title}</Title>
                <Meta>
                    <Info>
                        좋아요 <InfoP className="likes">0 </InfoP> &nbsp;
                        댓글 <InfoP className='commentCount'>{board.commentsCount} </InfoP> &nbsp;
                        조회수 <InfoP className='views'>0 </InfoP>&nbsp;
                    </Info>
                    <Info>{board.createdAt}</Info>
                </Meta>
            </Content>
            <Coment>
                <Circle>
                    <img src={`${BASE_URL}${board.memberProfileImage}`} id="writer-image" alt="writer" style={{ width: "100%", height: "100%" }} />
                </Circle>
                <b id="writer">{board.memberNickname}</b>
            </Coment>
        </StyledBoardListItem >
    );
}

export default BoardListItem;