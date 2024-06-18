import React, { useEffect, useState } from "react";
import { Content,  Meta, Info, Coment, Circle, TotalLikes, LineContent, Expended, StyledBoardListItem, FullHeartStyled, EmptyHeartStyled, InfoBlock, CommentButtonStyled  } from "./BoardListItemStyled";
import { BASE_URL } from "../../config/BaseUrl";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../img/defaultImage.png";

import ImageSlider from "./ImageSlider";
import Comment from "./Comment";


const BoardListItem = ({ board }) => {

    const [likes, setLikes] = useState(board.boardLikeCount > 0 ? true : false);
    const [totalLikes, setTotalLikes] = useState(board.boardTotalLikeCount);
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const imageUrls = board.boardImages ? board.boardImages.split(',').map(image => `${BASE_URL}${image}`)  : [defaultImage];

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
                {/* <img src={board.boardImages?`${BASE_URL}${imageUrls[0]}`: defaultImage} alt="boardImage" style={{ width: "100%", height: "100%", minHeight: "500px" }} /> */}

                <div>
                    <ImageSlider images={imageUrls} />
                </div>
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
                <Comment board={board} />
            </Content>
        </StyledBoardListItem >
    );
}

export default BoardListItem;