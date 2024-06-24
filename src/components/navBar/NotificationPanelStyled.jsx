import styled from "styled-components";

export const StyledNotification = styled.div`
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
    height: 5%;
`;

export const NotificationContent = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;