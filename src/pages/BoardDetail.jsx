import BoardContent from "../components/board-detail-form/BoardContent";
import BoardInfo from "../components/board-detail-form/BoardInfo";
import CommentRegisterForm from "../components/board-detail-form/comments/CommentRegisterForm";
import { useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import CommentList from "../components/board-detail-form/comments/CommentList";
import { BASE_URL } from "../config/BaseUrl";

//클라이언트 환경변수
export const UserIdContext = createContext();

const BoardDetail = () => {
    const { boardId } = useParams();
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [board, setBoard] = useState({});
    const [comments, setComments] = useState([]);
    const [userId, setUserId] = useState('');
    const url = `${BASE_URL}/boards/${boardId}`;

    useEffect(function getBoard() {
        console.log(url);
        fetch(url, {
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    setBoard(data.board);
                    setComments(data.commentData);
                    setUserId(data.userId);
                } else {
                    alert('없는 게시글입니다.');
                }
            })
    }, [])


    return (

        <>
            <UserIdContext.Provider value={{ userId }}>
                <BoardInfo board={board} />
                <BoardContent board={board} />
                <CommentRegisterForm />
                <CommentList comments={comments} />
            </UserIdContext.Provider>
        </>
    )
}
export default BoardDetail;