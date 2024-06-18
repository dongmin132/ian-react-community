import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CommentTotal = styled.span`
    margin-top: 10px;
    color: grey;
    cursor: pointer;
`
const CommentLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`
const CommentInput = styled.input`
    width: 100%;
    height: 30px;
    border: none;

`

const CommentSpan = styled.span`
    color: #0095f6;
    cursor: pointer;

    font-size: 14px;
    font-weight: bold;
    width: 50px;
`


const Comment = ({ board }) => {
    const navigate = useNavigate();
    const [comment, setComment] = useState('');
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const url = `${BASE_URL}/boards/${board.boardId}/comments`

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content:comment}),
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 201) {
                    alert('댓글이 등록되었습니다');
                    window.location.reload(); // 페이지를 새로고침합니다.

                }
                else if (data.status === 401) {
                    alert('로그인 후 이용해주세요');
                }
                else if (data.status === 400) {
                    alert('삭제되었거나 없는 게시글입니다');
                }
            })
    }
    return (
        <>
            <CommentTotal onClick={() => navigate(`/boards/${board.boardId}`)}>
                {board.boardCommentCount ? `댓글 ${board.boardCommentCount}개 모두 보기` : null}
            </CommentTotal>
            <CommentLine>
                <CommentInput placeholder="댓글 달기..." value={comment} onChange={(e) => setComment(e.target.value)}>
                </CommentInput>
                {comment && <CommentSpan onClick={handleSubmit}>게시</CommentSpan>}
            </CommentLine>
        </>

    )
}

export default Comment;