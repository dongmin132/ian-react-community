import styled from "styled-components";
import Button from "../../ui/Button";
import CommentList from "./CommentList";
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
mpaddin:20px 0px 20px 0px;

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

const BoardButton = styled(Button)`
width: 138px;
height: 39px;
border-radius: 16px;
align-self: flex-end;
`


const CommentRegisterForm = (boardId) => {
    return (
        <>
        <Form >
            <InputComment type="text" name="comment" placeholder="댓글입력"></InputComment>
            <BoardButton title="댓글작성" />
        </Form>
        <CommentList />
        </>
    )
}
export default CommentRegisterForm;