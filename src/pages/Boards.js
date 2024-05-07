import styled from "styled-components";
import BoardList from "../components/boards-form/BoardList";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import data from "../data.json"
import { useNavigate } from "react-router-dom";

const Boards = () => {
    const navigate = useNavigate();
    return (
        <>
            <Title title="게시판" />
            <Button text="글쓰기" />
            <BoardList onClickItem={(boardId) => {
                        navigate(`/boards/${boardId}`);
                    }}/>
        </>
    );
}
export default Boards;