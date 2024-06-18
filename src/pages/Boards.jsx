import styled from "styled-components";
import BoardList from "../components/boards-form/BoardList";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/BaseUrl";
import ProfileChange from "../components/profile/ProfileChange";

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
const StyledProfile = styled.div`
  width: 319px;
  display: flex;
  padding-left: 50px;
  align-self :flex-start;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }

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
            }
            else {
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
            <BoardList />
            <StyledProfile>
                <ProfileChange />
            </StyledProfile>
        </>
    );
}
export default Boards;