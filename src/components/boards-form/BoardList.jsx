import { useNavigate } from "react-router-dom";
import BoardListItem from "./BoardListItem";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";


const BoardList = ({ onClickItem }) => {
    const navigate = useNavigate();
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [boards, setBoards] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [ref, inView] = useInView();


    const getBoardList = () => {
        if (hasMore === false) return;
        const url = `${BASE_URL}/boards?page=${page}`;
        fetch(url, {
            credentials: "include"
        })
            .then((response) => response.json())
            .then((board) => {
                const boardDatas = board.data;
                if (board.status === 200) {
                    if(boardDatas.length === 0) {
                        setHasMore(false);
                        return;
                    }
                    setBoards((prevBoards) => [...prevBoards, ...boardDatas]);
                }
                else {
                    alert('게시글을 불러올 수 없습니다.');
                }
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    useEffect(() => {
        getBoardList();
    }, [page]);

    useEffect(() => {
        if (inView && hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [inView, hasMore]);

    return (
        <div>
            {boards.map((board, index) => (
                <BoardListItem key={board.boardId} board={board} />
            ))}
            <div ref={ref} style={{ height: '1px' }}></div>
        </div>
    );
}

export default BoardList;