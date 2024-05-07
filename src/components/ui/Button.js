import styled from 'styled-components';

const StyledButton = styled.button`
width: 339px;
padding : 5px;
height: 33px;
margin-top: 10px;
border-radius: 10px;
background-color: #ACA0EB;
color:white;
border:none;
`

const Button = ({onClick, title}) => {
    return <StyledButton onClick={onClick}>{title}</StyledButton>
}
export default Button;