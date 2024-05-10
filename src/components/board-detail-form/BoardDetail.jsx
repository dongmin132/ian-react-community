
import styled from "styled-components";
import BoardContent from "./BoardContent";
import BoardInfo from "./BoardInfo";
import CommentRegisterForm from "./comments/CommentRegisterForm";
import { useParams } from "react-router-dom";
import { createContext } from "react";

export const BoardIdContext = createContext();

const BoardDetail = () => {

    const { boardId } = useParams();
    return (
        <>
            <BoardInfo />
            <BoardContent />
            <BoardIdContext.Provider value={boardId}>
                <CommentRegisterForm/>
            </BoardIdContext.Provider>
        </>
    )
}
export default BoardDetail;