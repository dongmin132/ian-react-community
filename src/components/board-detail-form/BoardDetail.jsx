import BoardContent from "./BoardContent";
import BoardInfo from "./BoardInfo";
import CommentRegisterForm from "./comments/CommentRegisterForm";
import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import CommentList from "./comments/CommentList";
import { BASE_URL } from "../../config/BaseUrl";

//클라이언트 환경변수
// export const UserIdContext = createContext();

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
            <BoardInfo board={board} />
            <BoardContent board={board} />
            <CommentRegisterForm />
            <CommentList comments={comments}/>

        </>
    )
}
export default BoardDetail;