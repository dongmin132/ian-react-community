import { useEffect, useState } from 'react';
import './Header.css';
import { BASE_URL } from '../../config/BaseUrl';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const [profileImg, setProfileImg] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const [users, setUsers] = useState({});
    const location = useLocation();
    const backButton = location.pathname !== '/' && location.pathname !== '/boards';
    const navigate = useNavigate();     //뒤로 가기 기능을 추가하기 위해 history를 사용


    useEffect(() => {
        console.log("isLoggedIn ", isLoggedIn)
        fetch(`${BASE_URL}/members/getMember`, {
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 401) {
                    setProfileImg('');
                }
                else if(data.status === 200){
                    const member = data.member
                    setUsers(member);
                    setProfileImg(BASE_URL + member.profile_image);
                }
            })
    }, [isLoggedIn]);

    const logout = () => {
        fetch(`${BASE_URL}/members/logout`, {
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    alert("로그아웃 되었습니다");
                    setProfileImg('');
                    navigate("/");
                    setIsLoggedIn(false);
                }
                else {
                    alert("이미 로그아웃 되었거나 로그인 상태가 아닙니다");
                    navigate("/");
                }
            })
    }

    return (
        <>
            <div className="header">
                <span className="back" style={{ visibility: backButton ? "visible" : "hidden", cursor: "pointer" }} onClick={() => navigate(-1)}>&lt;</span>
                <span className="home" onClick={() => navigate("/boards")}> 아무말 대잔치</span>
                <div className="real" style={{ visibility: profileImg ? 'visible' : 'hidden' }}>
                    <img src={profileImg} className="small-profile" id="small-profile" alt="Profile" ></img>
                    <div className="dropdown">
                        <Link to={`/members/update`} state={{ users }} className="sub">회원정보수정</Link>
                        <Link to="/members/password" className="sub">비밀번호수정</Link>
                        <div className="sub" onClick={logout}>로그아웃</div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    );
}

export default Header;