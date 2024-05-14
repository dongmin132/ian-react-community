import styled from "styled-components";
const StyledToast = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 102px;
height:46px;
background: #ACA0EB;
border-radius: 30px;
border:none;
color: white;
margin-top: 80px;
position : fixed;
bottom: 10px;
`

const Toast = () => {
    return (
        <StyledToast>
            수정 완료
        </StyledToast>
    )
}
export default Toast;