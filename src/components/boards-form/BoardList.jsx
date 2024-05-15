import BoardListItem from "./BoardListItem";
import { useEffect, useState } from "react";


const BoardList = ({ onClickItem }) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [boards, setBoards] = useState([]);
    const url = `${BASE_URL}/boards`;

    useEffect(function getBoardList() {
        fetch(url, {
            credentials: "include"
        })
            .then((response) => response.json())
            .then((board) => {
                if (board.status === 200) {
                    const boardDatas = board.data;
                    setBoards(boardDatas);
                }
                else {
                    alert('게시글을 불러오는데 실패했습니다.')
                }
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);
    return (
        <div>
            {boards.map((board) => {
                return (
                    <BoardListItem key={board.id} board={board} onClick={() => { onClickItem(board.id) }} />
                );
            })}
        </div>
    );

}

export default BoardList;