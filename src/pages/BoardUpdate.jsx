import styled from "styled-components"
import BoardContentInput from "../components/ui/BoardContentInput"
import BoardInput from "../components/ui/BoardInput"
import Button from "../components/ui/Button"
import Form from "../components/ui/Form"
import Title from "../components/ui/Title"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const StyledTitle = styled.span`
font-weight: bold; 
margin-bottom: auto;
align-self: flex-start;
`

const StyledFileInput = styled.input`
align-self: flex-start;
`

const BoardUpdate = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const board = location.state.board;
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        setTitle(board.boardTitle);
        setContent(board.boardContent);
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const url = `${BASE_URL}/boards/${board.boardId}`;
        const formData = new FormData();
        if (file === null) {
            formData.append('title', title);
            formData.append('content', content);
        }
        else {
            formData.append('title', title);
            formData.append('content', content);
            formData.append('contentImage', file);

        }

        fetch(url, {
            method: 'PUT',
            body: formData,
            contentType: false, // 필수 : x-www-form-urlencoded로 파싱되는 것을 방지
            processData: false,  // 필수: contentType을 false로 줬을 때 QueryString 자동 설정됨. 해제
            credentials: 'include'
        }).then(
            response => {
                return response.json();
            }
        ).then(
            (data) => {
                if (data.status === 200) {
                    alert('게시글이 수정되었습니다');
                    navigate(-1);
                }
                else if (data.status === 404) {
                    alert('게시글 등록에 실패했습니다');
                }
                else if (data.status === 401) {
                    alert('로그인이 필요합니다');
                    navigate("/");
                }
                else if (data.status === 403) {
                    alert('게시글 수정 권한이 없습니다');
                    navigate("/boards");
                }
                else if(data.status ===413) {
                    alert('파일 크기가 너무 큽니다. \n최대 3MB까지 가능합니다.');
                }
            })
    }

    return (
        <>
            <Title title="게시글 수정" />
            <Form>
                <BoardInput title="제목*" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <BoardContentInput title="내용*" type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                <StyledTitle>이미지</StyledTitle>
                <StyledFileInput type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])}/>
                <Button title="완료" onClick={handleSubmit} />
            </Form>
        </>
    )
}

export default BoardUpdate;