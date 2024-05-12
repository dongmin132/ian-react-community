import styled from "styled-components";

export const ModalBackground = styled.div`
display: block;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 11;
background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경색 */`;

export const ModalMain = styled.div`
width: 408px;
height: 242px;
position: fixed;
z-index: 1000;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background-color: white;

border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid;
`;

export const ModalQuestion = styled.b`
font-size: 24px;
`;

export const Noti = styled.span`
font-size: 20px;
`;

export const ModalButtons = styled.div`
width:270px;
height: 44px;
display: flex;
align-items: center;
justify-content: space-around;

`;

export const CancelButton = styled.button`
width: 127px;
height: 100%;

border-radius: 12px;
background: #242424;
color:white;
font-size: 20px;
border:none;
`;

export const ConfirmButton = styled.button`
width: 127px;
height: 100%;

border-radius: 12px;
background: #C4A5FA;

color:black;
font-size: 20px;
border: none;
`;
