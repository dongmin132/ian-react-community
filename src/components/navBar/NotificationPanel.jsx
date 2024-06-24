import { useEffect, useState } from "react";
import { NotificationContent, NotificationTitle, StyledNotification } from "./NotificationPanelStyled"
import defaultProfile from "../../img/defaultProfile.png";
import defaultImage from "../../img/defaultImage.png";
import styled from "styled-components";

const Circle = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    box-sizing: border-box;

`;
const Square = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 8px;
    overflow: hidden;
    margin-left: 10px;
    box-sizing: border-box;

`;
const Article = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    
`;

const NotiContent = styled.span`
    width: 250px;
    word-wrap: break-word;
    font-size: 14px;

`

const NotificationPanel = ({ $isNotificationOpen, messages }) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    useEffect(function notiRead() {
        if ($isNotificationOpen) {
            fetch(`${BASE_URL}/boards/noti`, {
                method: 'PATCH',
                credentials: 'include'
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === 200) {
                        console.log('좋아요 알림을 읽음 처리했습니다.');
                    } else if(data.status === 401) {
                        alert('로그인이 필요합니다.');
                    }
                });
        }
    }, [$isNotificationOpen]); // 의존성 배열에 isNotificationOpen을 추가합니다.

    const { unreadMessages, readMessages } = messages.reduce((acc, message) => {
        if (message.isRead) {
          acc.readMessages.push(message);
        } else {
          acc.unreadMessages.push(message);
        }
        return acc;
      }, { unreadMessages: [], readMessages: [] });

    function getTimeDifference(previous) {
        const current = new Date();
        const previousDate = new Date(previous);
    
        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
    
        const elapsed = current - previousDate;
    
        if (elapsed < msPerMinute) {
            return Math.round(elapsed/1000) + '초';   
        }
    
        else if (elapsed < msPerHour) {
            return Math.round(elapsed/msPerMinute) + '분';   
        }
    
        else if (elapsed < msPerDay ) {
            return Math.round(elapsed/msPerHour ) + '시간';   
        }
    
        else {
            return Math.round(elapsed/msPerDay) + '일';   
        }
    }
    

    return (
        <StyledNotification $isNotificationOpen={$isNotificationOpen}>
            <NotificationTitle>알림</NotificationTitle>
            <NotificationContent>
            <div>
          <h3>새로운 메시지</h3>
          {unreadMessages.map((message, index) => (
            <Article key={index}>
              <Circle>
                <img src={message.memberProfileImage ? `${BASE_URL}${message.memberProfileImage}` : defaultProfile} style={{ width: '100%', height: '100%' }} />
              </Circle>
              <NotiContent>
                <b>{message.senderNickname}</b>님이 회원님의 사진을 좋아합니다. <span style={{ color: '#737373' }}>{getTimeDifference(message.createdAt)}</span>
              </NotiContent>
              <Square>
                <img src={message.boardImage ? `${BASE_URL}${message.boardImage}` : defaultImage} style={{ width: '100%', height: '100%' }} />
              </Square>
            </Article>
          ))}
        </div>
        <div>
          <h3>이전 메시지</h3>
          {readMessages.map((message, index) => (
            <Article key={index}>
              <Circle>
                <img src={message.memberProfileImage ? `${BASE_URL}${message.memberProfileImage}` : defaultProfile} style={{ width: '100%', height: '100%' }} />
              </Circle>
              <NotiContent>
                <b>{message.senderNickname}</b>님이 회원님의 사진을 좋아합니다. <span style={{ color: '#737373' }}>{getTimeDifference(message.createdAt)}</span>
              </NotiContent>
              <Square>
                <img src={message.boardImage ? `${BASE_URL}${message.boardImage}` : defaultImage} style={{ width: '100%', height: '100%' }} />
              </Square>
            </Article>
          ))}
        </div>
            </NotificationContent>
        </StyledNotification>
    )
}

export default NotificationPanel;