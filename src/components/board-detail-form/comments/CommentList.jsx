import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const CommentListStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    margin-bottom: 20px;
`

const CommentList = ({comments}) => {
    return (
        <CommentListStyled>
            {comments.map((comment) => {
                return (
                    <CommentListItem key={comment.id} comment={comment} />
                )
            })}
        </CommentListStyled>
    )
}

export default CommentList;