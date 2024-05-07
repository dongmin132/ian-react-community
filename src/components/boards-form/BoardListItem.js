import React from "react";
import styled from "styled-components";
import "./BoardListItem.css";
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
            <div className="content">
                <span className="title">{board.title}</span>
                <div className="meta">
                    <span className="info">
                        좋아요 <p className="likes">0 </p> &nbsp;
                        댓글 <p className='commentCount'>{board.commentsCount} </p> &nbsp;
                        조회수 <p className='views'>0 </p>&nbsp;
                    </span>
                    <span className="date">{board.createdAt}</span>
                </div>
            </div>
            <div className="coment">
                <div className="circle">
                    <img src={`${BASE_URL}${board.memberProfileImage}`} id="writer-image" alt="writer" style={{width:"100%", height:"100%"}}/>
                </div>
                <b id="writer">{board.memberNickname}</b>
            </div>
        </StyledBoardListItem >
    );
}

export default BoardListItem;