import styled from "styled-components"

const StyledInput = styled.input`
height: 64px;
width: 572px;
font-size: 16px;
border: none;
border-top: 1px solid #00000029;
border-bottom: 1px solid #00000029;
background-color: transparent;  /* 배경색을 투명하게 함*/
`
const StyledTitle = styled.p`
font-weight: bold; 
margin-bottom: auto;
align-self: flex-start;
`

const BoardInput = (props) => {
    return (
        <>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledInput className = {props.className} type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
        </>
    );
}

export default BoardInput;