import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NAVBAR_WIDTH_EXPANDED = '80px';
export const NAVBAR_WIDTH_COLLAPSED = '15%';

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
  box-sizing: border-box;
  padding: 20px;
  z-index: 1;

  @media (max-width: 1000px) {
    box-sizing: border-box;
    width: ${NAVBAR_WIDTH_EXPANDED};
  }
`;


export const HomeTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10%;

`;

export const Menu = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LinkStyle = styled(Link)`
  color: black;
`;

export const MenuElement = styled.div`
  display: flex;
  align-items: center;
  
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;

  font-size: 16px;
  width: auto;
  height: 64px;



  & > span {
    margin-left: 10px;
    display: ${(props) => (props.$isNotificationOpen ? 'none' : 'inline')};
  }

  @media (max-width: 1000px) {


    & > span {
      display: none;
    }
  }
`;


