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


const ProfileImage = (props) => {
    
    
    const fileInput = useRef(null);
    const openFileUploader = () => {
        fileInput.current.click();
    };



    return (
        <StyledCircle  className='circle' onClick={openFileUploader}>
            <img src={ props.image } style={{ width: '100%', height: '100%'}} />
            <input ref={fileInput} style={{ display: 'none' }} type="file" name="image" accept="image/*" onChange={props.onChange}></input>
        </StyledCircle>
    );
}

export default ProfileImage;