import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NAVBAR_WIDTH_EXPANDED = '80px';
export const NAVBAR_WIDTH_COLLAPSED = '10%';

export const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$isNotificationOpen ? NAVBAR_WIDTH_EXPANDED : NAVBAR_WIDTH_COLLAPSED)};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #ccc;
  overflow-x: hidden;
  align-items: center;

  @media (max-width: 1000px) {
    box-sizing: border-box;
    width: ${NAVBAR_WIDTH_EXPANDED};
  }
`;

export const HomeTitle = styled.div`
  display: flex;
  justify-content: center;
  height: 10%;
`;

export const Menu = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
`;

export const LinkStyle = styled(Link)`
  color: black;
`;

export const MenuElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  margin: 20px 0px;
  font-size: 16px;
  width: 220px;
  height: 64px;

  & > span {
    margin-left: 10px;
    display: ${(props) => (props.$isNotificationOpen ? 'none' : 'inline')};
  }

  @media (max-width: 1000px) {
    justify-content: center;
    width: 64px;
    & > span {
      display: none;
    }
  }
`;

export const NotificationStyled = styled.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 80px;
  display: ${(props) => (props.$isNotificationOpen ? 'flex' : 'none')};
  border: 1px solid #ccc;
  background-color: white;
  z-index: 1;
    flex-direction: column;
    align-items: center;


`;

export const NotificationTitle = styled.div`
    padding:20px;
    align-self: flex-start;
    font-size: 24px;
    font-weight: bold;
    height: 10%;
`;

export const NotificationContent = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
