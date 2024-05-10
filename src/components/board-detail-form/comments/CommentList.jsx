import styled from "styled-components";
import CommentListItem from "./CommentListItem";
import { useContext, useEffect,useState } from "react";
import { BASE_URL } from "../../../config/BaseUrl";
import { BoardIdContext } from "../BoardDetail";

const CommentListStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
`

const CommentList = () => {
    const [comments, setComments] = useState([]);
    const [userId, setUserId] = useState(''); //로그인한 유저의 id
    const boardId = useContext(BoardIdContext);
    useEffect(() => {
        fetch(BASE_URL + `/boards/${boardId}/comments`, {
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.status === 200) {
                    setComments(data.data);
                    setUserId(data.userId);
                }
                else {
                    alert('댓글을 불러오는데 실패했습니다.');
                }
                // if(comment.memberId===userId){
                //     buttons.style.display = 'flex';
                // } else {
                //     buttons.style.display = 'none';
                // }

            })
    },[])

    return (
        <CommentListStyled>
            {comments.map((comment) => {
                return (
                    <CommentListItem key={comment.id} comment={comment} userId={userId} />
                )
            })}
        </CommentListStyled>
    )
}

export default CommentList;