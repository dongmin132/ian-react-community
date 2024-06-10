import styled from 'styled-components';
import { BoardButtons, Button } from '../BoardInfoStyled';
import { useContext, useEffect, useState } from 'react';
import { UserIdContext } from '../../../pages/BoardDetail';
import CommentModal from '../../modal/CommentModal';

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


const CommentListItem = ({ comment, setEditingComment }) => {
    const userId = useContext(UserIdContext).userId;
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [modal, setModal] = useState(false);      // 모달 상태
    // 수정 버튼 클릭 시
    const handleEditClick = () => {
        setEditingComment({ id: comment.commentId, content: comment.commentContent })
    }
    // 삭제 버튼 클릭 시
    const handleDeleteClick = () => {
        setModal(true);

    }

    // 모달의 상태가 변경될 때마다 실행되는 useEffect
    useEffect(() => {
        if (modal) {
            // 모달이 열릴 때 body의 overflow를 hidden으로 설정
            document.body.style.overflow = 'hidden';
        } else {
            // 모달이 닫힐 때 body의 overflow를 원래대로 복구
            document.body.style.overflow = 'unset';
        }
    }, [modal]);
    
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

                <CommentContent >{comment.commentContent}</CommentContent>
            </CommentBlock>
            {userId === comment.memberId ? (
                <BoardButtons className="board-buttons">
                    <Button onClick={handleEditClick}>수정</Button>
                    <Button onClick={handleDeleteClick} >삭제</Button>
                    {modal ? <CommentModal onClose={() => setModal(false)} commentId={comment.commentId} /> : <></>}
                </BoardButtons>
            ) : (<></>)}

        </CommentListItemStyled>

    )
}
export default CommentListItem;