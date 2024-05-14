import styled from 'styled-components';
import Title from '../ui/Title';

import { useEffect, useRef } from 'react';

const ProfileUpdateContainer = styled.div`
    // 여기에 필요한 CSS 스타일을 추가하세요.
`;

const Image = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const BackgroundImage = styled.div`
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경색 */
position:absolute;
display: none;
justify-content: center;
align-items: center;
`;


const Circle = styled.div`
width: 149px;
height: 149px;
border-radius: 50%;
background: #99351b;
overflow: hidden;
margin-bottom: 15%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position:relative;
text-align: center; 

&:hover {
    ${BackgroundImage} {
        display: flex;
        cursor: pointer;
    }
}
`;

const ProfileImage = styled.img`
width: 100%;
height: 100%;
`;


const ProfileInput = styled.input`
width: 149px;
height: 149px;
border-radius: 50%;
display: none;
`;

const ChangeButton = styled.button`
width: 52px;
height: 27px;
margin:auto;

position:absolute;
cursor:pointer;
font-size: 15px;
border-radius: 25px;
border: 2px solid #FFFFFF;
background: transparent;
font-weight: bold;
color:white;
`;

const ProfileUpdate = ({onChange,profileImage}) => {
    
    
    const fileInput = useRef(null);
    const openFileUploader = () => {
        fileInput.current.click();
    }

    return (
        <>
            <Title title="회원 정보 수정"></Title>
            <Image>
                <span style={{ alignSelf: 'flex-start', marginLeft:'125px'}}><b>프로필 사진*</b></span>
                <Circle onClick = {openFileUploader}>
                    <ProfileImage src={profileImage} />
                    <BackgroundImage>
                        <ProfileInput ref = {fileInput} type="file" accept="image/*" onChange = {onChange}/>
                        <ChangeButton>변경</ChangeButton>
                    </BackgroundImage>
                </Circle>
            </Image>
        </>
    )
}

export default ProfileUpdate;