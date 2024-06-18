import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/BaseUrl';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ReactComponent as Home } from '../../img/home.svg';
import { ReactComponent as HomeActive } from '../../img/homeActive.svg';
import { ReactComponent as Heart } from '../../img/heart.svg';
import { ReactComponent as HeartActive } from '../../img/heartActive.svg';
import { ReactComponent as TitleImage } from '../../img/title.svg';
import { ReactComponent as MoreButton } from '../../img/moreButton.svg';
import defaultProfile from '../../img/defaultProfile.png';
import { StyledNavBar, HomeTitle, Menu, MenuElement, NotificationStyled, NotificationTitle, NotificationContent } from './NavBarStyled';
import { useFetchMember } from '../../\bhooks/useFetchMember';
import MoreMenuContainer from './MoreMenuContainer';

const Circle = styled.div`
width: 30px;
height: 30px;
background: #D9D9D9;
border-radius: 50%;
overflow: hidden;

`
const LowSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`


const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState('home');
    const { users, profileImg, setProfileImg } = useFetchMember(isLoggedIn);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();     //뒤로 가기 기능을 추가하기 위해 history를 사용

    const handleButtonClick = (page) => {
        if (selectedPage === page) {
            setSelectedPage('');
            setIsNotificationOpen(false);
        } else {
            setSelectedPage(page);
            setIsNotificationOpen(page === 'noti');
        }
    };

    // const handleMoreButtonClick = (page) => {
    //     setSelectedPage(page);
    //     setIsNotificationOpen(page === 'noti');
    //     setShowMenu(page==='more');
    // };



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
        <StyledNavBar $isNotificationOpen={isNotificationOpen}>
            <HomeTitle>
                <div style={{ cursor: "pointer" }} onClick={() => navigate("/boards")}>
                    <TitleImage />
                </div>
            </HomeTitle>
            <Menu>
                <MenuElement onClick={() => handleButtonClick('home')} $isNotificationOpen={isNotificationOpen}>
                    {selectedPage === 'home' ? <HomeActive /> : <Home />}
                    <span style={{ fontWeight: selectedPage === 'home' ? 'bold' : 'normal' }}>홈</span>
                </MenuElement>
                <MenuElement onClick={() => handleButtonClick('noti')} $isNotificationOpen={isNotificationOpen}>
                    {selectedPage === 'noti' ? <HeartActive /> : <Heart />}
                    <span style={{ fontWeight: selectedPage === 'noti' ? 'bold' : 'normal' }}>알림</span>
                </MenuElement>
                <MenuElement onClick={() => handleButtonClick('profile')} $isNotificationOpen={isNotificationOpen}>
                    <Circle style={{ border: selectedPage === 'profile' ? '2px solid #000' : '0px solid #000' }}>
                        <img src={profileImg ? profileImg : defaultProfile} alt="profile" style={{ width: "100%", height: "100%" }} />
                    </Circle>
                    <span style={{ fontWeight: selectedPage === 'profile' ? 'bold' : 'normal' }}>프로필</span>
                </MenuElement>
            </Menu>
            <LowSection>
                <MenuElement onClick={() => handleButtonClick('more')} $isNotificationOpen={isNotificationOpen}>
                    <MoreButton />
                    <span style={{ fontWeight: selectedPage === 'more' ? 'bold' : 'normal' }}>더 보기</span>
                    {selectedPage === 'more' && <MoreMenuContainer logout={logout}/> }
                </MenuElement>
            </LowSection>
            <NotificationStyled $isNotificationOpen={isNotificationOpen}>
                <NotificationTitle>알림</NotificationTitle>
                <NotificationContent>알림부분</NotificationContent>
            </NotificationStyled>
        </StyledNavBar>
    );
};

export default Navbar;