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
cursor: pointer;
`

const Button = ({onClick, title, className}) => {
    return <StyledButton onClick={onClick} className={className}>{title}</StyledButton>
}
export default Button;