import { StyledNotification } from "./NotificationPanelStyled"

const NotificationPanel = ({isNotificationOpen}) => {
    return (
        <StyledNotification $isNotificationOpen={isNotificationOpen}>
            NotificationPanel
        </StyledNotification>
    )
}

export default NotificationPanel;