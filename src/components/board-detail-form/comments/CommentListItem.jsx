import styled from 'styled-components';
import { BoardButtons, Button } from '../BoardInfoStyled';
import { BASE_URL } from '../../../config/BaseUrl';
import { useContext } from 'react';
import { UserIdContext } from '../../../pages/BoardDetail';

const CommentListItemStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:100%;
`

const CommentBlock = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
flex-grow:1;
`
const CommentInfo = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const CommentMember = styled.div`
display: flex;
align-items: center;
`

const Circle = styled.div`
width: 36px;
height: 36px;
background: #D9D9D9;
border-radius: 50%;
margin-right: 10px;
overflow: hidden;
`

const Img = styled.img`
height: 100%;
width: 100%;
`

const Date = styled.div`
margin-left: 20px;
font-size: 14px;
`

const CommentContent = styled.div`
margin-top: 10px;
margin-left: 40px;
overflow-wrap: break-word; /* 공백 없이 긴 문자열도 줄바꿈 */
word-break: break-all; /* 단어의 중간에서도 줄바꿈 */
`
const CommentListItem = ({ comment }) => {
    const userId = useContext(UserIdContext).userId;

    return (

        <CommentListItemStyled>
            <CommentBlock>
                <CommentInfo>
                    <CommentMember>
                        <Circle><Img src={`${BASE_URL}${comment.memberProfileImage}`}></Img></Circle>
                        <b>{comment.memberNickname}</b>
                    </CommentMember>
                    <Date> {comment.createAt}</Date>
                </CommentInfo>

                <CommentContent >{comment.content}</CommentContent>
            </CommentBlock>
            {userId===comment.userId ? (
            <BoardButtons className="board-buttons">
                <Button>수정</Button>
                <Button>삭제</Button>
            </BoardButtons>
            ):(<></>)}
            
        </CommentListItemStyled>

    )
}
export default CommentListItem;