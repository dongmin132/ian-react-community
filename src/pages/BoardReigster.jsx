import styled from "styled-components";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import Form from "../components/ui/Form";
import BoardInput from "../components/ui/BoardInput";
import BoardContentInput from "../components/ui/BoardContentInput";
import { useState } from "react";
import { BASE_URL } from "../config/BaseUrl";
import { useNavigate } from "react-router-dom";
const StyledTitle = styled.span`
font-weight: bold; 
margin-bottom: auto;
align-self: flex-start;
`

const StyledFileInput = styled.input`
align-self: flex-start;
`

const BoardRegister = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        //formData.append를 사용하면 모든 값을 문자열로 변환한다.
        formData.append('title',title);
        formData.append('content',content);
        files.forEach((file) => {
            formData.append('contentImage', file);
          });

        fetch(`${BASE_URL}/boards`, {
            method: 'POST',
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
                if (data.status === 201) {
                    alert('게시글이 등록되었습니다');
                    navigate('/boards');
                }
                else if (data.status === 404) {
                    alert('게시글 등록에 실패했습니다');
                }
                else if (data.status === 401) {
                    alert('로그인이 필요합니다');
                    navigate("/");
                }
                else if(data.status ===413) {
                    alert('파일 크기가 너무 큽니다. \n최대 3MB까지 가능합니다.');
                }
            })
    }



    return (
        <>
        <Title title="게시글 작성" />
        <Form>
            <BoardInput title="제목*" type="text" placeholder="제목을 입력해주세요. (최대26글자)" onChange={(e)=>setTitle(e.target.value)} />
            <BoardContentInput title="내용*" type="text" placeholder="내용을 입력해주세요." onChange={(e)=>setContent(e.target.value)}/>
            <StyledTitle>이미지</StyledTitle>
            <StyledFileInput type="file" accept="image/*" multiple onChange={(e)=>setFiles(Array.from(e.target.files))}/>
            <Button title="완료" onClick={handleSubmit}/>
            
        </Form>
        </>
    )
}
export default BoardRegister;