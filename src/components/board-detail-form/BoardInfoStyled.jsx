import styled from 'styled-components';

export const Section = styled.section`
display:flex;
flex-direction: column;
justify-content: space-evenly;  

width: 592px;
height: 169px;
border-bottom: 1px solid #00000029;
`
export const Circle = styled.div`
    width: 36px;
    height: 36px;
    background: #D9D9D9;
    border-radius: 50%;
    margin-right: 10px;
`;
export const Comment = styled.div`
    display: flex;
    align-items: center;
`;

export const Meta = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
justify-content: space-between;
`;

export const Button = styled.button`
width: 50px;
height: 27px;
border-radius:8px;
border : 1px solid #ACA0EB ;
background-color:white;
`

export const BoardButtons = styled.div`
display: flex;
width : 105px;
justify-content: space-between;

`
export const Date = styled.span`
position: absolute;
left: 40%;
font-size: 14px;
`
export  const Img = styled.img`
width: 100%;
height: 100%;
`