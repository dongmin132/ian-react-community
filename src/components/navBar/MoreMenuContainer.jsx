import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: relative;

`;

const Menu = styled.div`
  position: absolute;
  top: -320px;
  left: -92px;
  width: 200px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: block;
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 5px 0;
`;

const MoreMenuContainer = ({logout}) => {

    
    return (
        <MenuContainer>
          <Menu>
            <MenuItem>설정</MenuItem>
            <MenuItem>내 활동</MenuItem>
            <MenuItem>저장됨</MenuItem>
            <MenuItem>모드 전환</MenuItem>
            <MenuItem>문제 신고</MenuItem>
            <Divider />
            <MenuItem>계정 전환</MenuItem>
            <MenuItem onClick={logout}>로그아웃</MenuItem>
          </Menu>
        </MenuContainer>
      );
    };

export default MoreMenuContainer;
