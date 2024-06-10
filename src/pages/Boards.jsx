import styled from "styled-components";
import BoardList from "../components/boards-form/BoardList";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/BaseUrl";

const StyledButton = styled(Button)`
width: 138px;
height: 39px;
align-self: flex-end;
border-radius: 16px;
`
const StyledContent = styled.span`
text-align: center;
font-size: 24px;
`

const increaseViewCount = (boardId) => {
    fetch(`${BASE_URL}/boards/${boardId}/views`, {
        method: 'POST',
        credentials: 'include'
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status === 200) {
            // 조회수 증가 성공
            console.log('Successfully increased view count');
        } else {
            // 조회수 증가 실패
            console.error('Failed to increase view count');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

const Boards = () => {
    const navigate = useNavigate();
    return (
        <>
            <StyledContent style={{textAlign : "center"}}>안녕하세요,<br></br>아무 말 대잔치 <b>게시판</b> 입니다.</StyledContent>
            <StyledButton title="게시글 작성" onClick={() => navigate(`/boards/register`)}/>
            <BoardList onClickItem={(boardId) => {
                        increaseViewCount(boardId);
                        navigate(`/boards/${boardId}`);
                    }}/>
        </>
    );
}
export default Boards;