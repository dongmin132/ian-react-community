import styled from "styled-components"

const StyledInput = styled.input`
width:339px;
height: 33px;
margin-bottom: 5px;
border: 1px solid #000000;
border-radius: 10px;
`
const StyledTitle = styled.p`
margin-bottom: auto;
align-self: flex-start;
`

const Input = (props) => {
    return (
        <>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledInput type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
        </>
    );
}

export default Input;