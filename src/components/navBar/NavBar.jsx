import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/BaseUrl';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ReactComponent as Home } from '../../img/home.svg';
import { ReactComponent as HomeActive } from '../../img/homeActive.svg';
import { ReactComponent as Heart } from '../../img/heart.svg';
import { ReactComponent as HeartActive } from '../../img/heartActive.svg';
import { StyledNavBar, HomeTitle, Menu, MenuElement, NotificationStyled, NotificationTitle, NotificationContent } from './NavBarStyled';




const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [profileImg, setProfileImg] = useState('');
    const [users, setUsers] = useState({});
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const navigate = useNavigate();     //뒤로 가기 기능을 추가하기 위해 history를 사용

    const handleButtonClick = (page) => {
        setSelectedPage(page);
        setIsNotificationOpen(page === 'noti');
        console.log(isNotificationOpen)
    };

    return (
        <StyledNavBar $isNotificationOpen={isNotificationOpen}>
            <HomeTitle>
                <span className="home" onClick={() => navigate("/boards")}> 아무말 대잔치</span>
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
                <MenuElement onClick={() => handleButtonClick('contact')} $isNotificationOpen={isNotificationOpen}>
                    <span>Contact</span>
                </MenuElement>
            </Menu>
            <NotificationStyled $isNotificationOpen={isNotificationOpen}>
                <NotificationTitle>알림</NotificationTitle>
                <NotificationContent>알림부분</NotificationContent>
            </NotificationStyled>
        </StyledNavBar>
    );
};

export default Navbar;