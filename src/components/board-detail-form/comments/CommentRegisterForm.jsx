import styled from "styled-components";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:20px 0px 20px 0px;

width: 592px;
height: 169px;
border-radius: 16px;
background-color: white;

`

const InputComment = styled.textarea`
width: 544px;
height: 94px;
border: none;
border-bottom: 2px solid #00000029;
resize: none;
`

const CommentButton = styled(Button)`
width: 138px;
height: 39px;
border-radius: 16px;
align-self: flex-end;
margin-right: 20px;
`


const CommentRegisterForm = ({editingComment,setEditingComment}) => {
    const [comment, setComment] = useState('');
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const {boardId} = useParams();
    const url = `${BASE_URL}/boards/${boardId}/comments`
    const navigate = useNavigate();

        // editingComment이 변경될 때마다 comment 상태 업데이트
        useEffect(() => {
            if (editingComment) {
                setComment(editingComment.content);
            } else {
                setComment('');
            }
        }, [editingComment]);


    const handleRegister = (e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content:comment}),
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 201) {
                    alert('댓글이 등록되었습니다');
                }
                else if (data.status === 401) {
                    alert('로그인 후 이용해주세요');
                }
                else if (data.status === 400) {
                    alert('삭제되었거나 없는 게시글입니다');
                }
            })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(url+`/${editingComment.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content:comment}),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    alert('댓글이 수정되었습니다\n수정된 댓글을 확인하려면 새로고침을 하는걸 고쳐야됨');
                }
                else if (data.status === 401) {
                    alert('로그인 후 이용해주세요');
                    navigate('/');
                }
                else if (data.status === 400) {
                    alert('댓글을 입력해주세요');
                    navigate('/boards');
                }
                else if (data.status === 403) {
                    alert('본인이 작성한 댓글만 수정 가능합니다');
                }
                else {
                    alert('댓글 수정에 실패했습니다');
                }
            })
    }


    return (
        <Form >
            <InputComment type="text" placeholder="댓글입력" value={comment} onChange={(e)=>setComment(e.target.value)}></InputComment>
            <CommentButton title={editingComment?"댓글수정": "댓글작성"} onClick={editingComment?handleUpdate:handleRegister}/>
        </Form>
    )
}
export default CommentRegisterForm;