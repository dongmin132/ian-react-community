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
import { ReactComponent as NewArticle } from '../../img/newArticle.svg';
import { ReactComponent as NewArticleActive } from '../../img/newArticleActive.svg';
import defaultProfile from '../../img/defaultProfile.png';
import { StyledNavBar, HomeTitle, Menu, MenuElement } from './NavBarStyled';
import { useFetchMember } from '../../\bhooks/useFetchMember';
import MoreMenuContainer from './MoreMenuContainer';
import NotificationPanel from './NotificationPanel';
import NotiToggle from './NotiToggle';

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
    const { users, profileImg, setProfileImg } = useFetchMember(isLoggedIn);;
    const [likeCount, setLikeCount] = useState(0);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate();

    useEffect(() => {
        const eventSource = new EventSource(`${BASE_URL}/boards/sse`, { withCredentials: true });

        eventSource.onmessage = function (event) {
            console.log('new message', event.data);
            const data = JSON.parse(event.data);

            setMessages((prevMessages) => [...prevMessages, data]);
            setLikeCount(data.likeCount);
        };

        eventSource.onerror = function (event) {
            console.error('SSE connection error', event);
            setError('SSE connection error. Please try again later.');
            eventSource.close(); // 연결이 끊어졌을 때 close
        };

        return () => {

            eventSource.close();
        };
    }, []);

    const handleButtonClick = (page) => {
        if (selectedPage === page) {
            setSelectedPage('');
            setIsNotificationOpen(false);
        } else {
            setSelectedPage(page);
            setIsNotificationOpen(page === 'noti');
            if(page === 'post') {
                navigate(`/boards/register`);
            } else if(page === 'home') {
                navigate(`/boards`);
            }
        }
    };


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
                    <NotiToggle likeCount = {likeCount} $isNotificationOpen={isNotificationOpen}/>
                </MenuElement>
                <MenuElement onClick={() => handleButtonClick('post')} $isNotificationOpen={isNotificationOpen}>
                    {selectedPage === 'post' ? <NewArticleActive/> : <NewArticle />}
                    <span style={{ fontWeight: selectedPage === 'post' ? 'bold' : 'normal' }}>만들기</span>
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
                    {selectedPage === 'more' && <MoreMenuContainer logout={logout} />}
                </MenuElement>
            </LowSection>
            <NotificationPanel $isNotificationOpen={isNotificationOpen} messages={messages} />
        </StyledNavBar>
    );
};

export default Navbar;