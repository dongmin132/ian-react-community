import styled from "styled-components"

const StyledTextarea = styled.textarea`
display: flex;
align-items: center;
justify-content: center;
height: 279px;
width: 100%;
border: none;
border-top: 1px solid #00000029;
border-bottom: 1px solid #00000029;
font-size: 16px;
resize:none;
`
const StyledTitle = styled.p`
font-weight: bold;
margin-bottom: auto;
align-self: flex-start;
`

const BoardContentInput = (props) => {
    return (
        <>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledTextarea className = {props.className} type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
        </>
    );
}

export default BoardContentInput;