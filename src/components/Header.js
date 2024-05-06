import { useState } from 'react';
import './Header.css';

const Header = ({ isLoggedIn, back }) => {
    const [profileImg, setProfileImg] = useState('');

    // const handleProfileImageChange = (imageSrc) => {
        // setProfileImg(imageSrc);
    // }
    //추후에 fetch로 이미지 갖고오기
    return (
        <>
        <div className="header">
            <a href="/board/boards" className="back">&lt;</a>
            <span id="home">아무말 대잔치</span>
            <div className="real">
                <img src={profileImg} className="small-profile" id="small-profile" alt="Profile"></img>
                <div className="dropdown">
                    <a className="sub" id="user-update">회원정보수정</a>
                    <a className="sub" id="password-update">비밀번호수정</a>
                    <a className="sub" id="logout">로그아웃</a>
                </div>
            </div>
        </div>
        <hr></hr>
        </>  
    );
}

export default Header;