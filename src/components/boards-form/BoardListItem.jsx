import React, { useEffect, useState } from "react";
import { Content,  Meta, Info, Coment, Circle, TotalLikes, LineContent, Expended, StyledBoardListItem, FullHeartStyled, EmptyHeartStyled, InfoBlock, CommentButtonStyled  } from "./BoardListItemStyled";
import { BASE_URL } from "../../config/BaseUrl";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../img/defaultImage.png";

const CommentTotal = styled.span`
    margin-top: 10px;
    color: grey;
    cursor: pointer;
`
const BoardListItem = ({ board }) => {

    const [likes, setLikes] = useState(board.boardLikeCount > 0 ? true : false);
    const [totalLikes, setTotalLikes] = useState(board.boardTotalLikeCount);
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const handleLike = () => {
        if (!likes) {
            setTotalLikes(totalLikes + 1);
        } else {
            setTotalLikes(totalLikes - 1);
        }
        fetch(`${BASE_URL}/boards/${board.boardId}/likes`, {
            method: 'POST',
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    setLikes(!likes);
                } else if (data.status === 401) {
                    alert('로그인 후 이용해주세요.')
                    navigate("/");
                }
                else {
                    console.error('Failed to like');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <StyledBoardListItem>
            <Coment>
                <Circle>
                    <img src={`${BASE_URL}${board.memberProfileImage}`} id="writer-image" alt="writer" style={{ width: "100%", height: "100%" }} />
                </Circle>
                <b id="writer">{board.memberNickname}</b>
            </Coment>
            <Content>
                {/* <Title>{board.boardTitle}</Title> */}
                <img src={board.boardImage?`${BASE_URL}${board.boardImage}`: defaultImage} alt="boardImage" style={{ width: "100%", height: "100%", minHeight: "500px" }} />
                <Meta>
                    <Info>
                        <InfoBlock>{likes ? <FullHeartStyled onClick={handleLike} /> : <EmptyHeartStyled onClick={handleLike} />}&nbsp;</InfoBlock>
                        <InfoBlock><CommentButtonStyled />&nbsp;</InfoBlock>
                        {/* 조회수 <InfoP className='views'>{board.boardViewCount} </InfoP>&nbsp; */}
                    </Info>
                    <Info>{new Date(board.createdAt).toLocaleString()}</Info>
                </Meta>
                <TotalLikes> 좋아요 {totalLikes}개</TotalLikes>
                <LineContent><b>{board.memberNickname}</b> &nbsp;
                    <span>
                        {isExpanded
                            ? board.boardContent
                            : board.boardContent.substring(0, Math.min(30, board.boardContent.indexOf('\n') !== -1 ? board.boardContent.indexOf('\n') : board.boardContent.length))}
                        {board.boardContent.length > 30 || board.boardContent.indexOf('\n') !== -1 ? (
                            <Expended onClick={() => setIsExpanded(!isExpanded)}>
                                {!isExpanded ? '...더보기' : ''}
                            </Expended>
                        ) : null}
                    </span>
                </LineContent>
                <CommentTotal onClick={()=>navigate(`/boards/${board.boardId}`)}> 
                    {board.boardCommentCount? `댓글 ${board.boardCommentCount}개 모두 보기` : null}
                </CommentTotal>
            </Content>
        </StyledBoardListItem >
    );
}

export default BoardListItem;