import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div`
display: flex;
width: 149px;
height: 149px;
border-radius: 50%;
background-color: #C4C4C4;
align-items: center;
justify-content: center;
align-self: center;

overflow: hidden;
cursor: pointer;
margin-bottom: 10px;
`


const ProfileImage = ({onChangeFile}) => {
    const src = null;
    const [image, setImage] = useState(src|| `${process.env.PUBLIC_URL}/images/default-profile.png`);
    const fileInput = useRef(null);

    const openFileUploader = () => {
        fileInput.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(`${process.env.PUBLIC_URL}/images/default-profile.png`);
        }
    };

    return (
        <StyledCircle  className='circle' onClick={openFileUploader}>
            <img src={ image } style={{ width: '100%', height: '100%'}} />
            <input ref={fileInput} style={{ display: 'none' }} type="file" name="image" accept="image/*" onChange={handleFileChange}></input>
        </StyledCircle>
    );
}

export default ProfileImage;