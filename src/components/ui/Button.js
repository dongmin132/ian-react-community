import styled from 'styled-components';

const StyledButton = styled.button`
width: ${props=>props.width || '339px'};
padding : 5px;
height: ${props=>props.height || '33px'};
margin-top: 10px;
border-radius: 10px;
background-color: #ACA0EB;
color:white;
border:none;
cursor: pointer;
`

const Button = ({onClick, title, className, width, height,align}) => {
    return <StyledButton onClick={onClick} className={className} width={width} height={height} align-self={align}>{title}</StyledButton>
}
export default Button;