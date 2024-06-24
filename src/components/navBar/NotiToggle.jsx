import styled from "styled-components";
import { ReactComponent as NotiComment } from '../../img/notiComment.svg';
import { ReactComponent as NotiHeart } from '../../img/notiHeart.svg';
import { useEffect, useState } from "react";
const Ballon = styled.div`
display: ${(props) => (!props.$isNotificationOpen && props.likeCount? 'flex' : 'none')};
align-items: center;
background-color: #FF3B30;
color: white;
padding: 10px 10px 10px 0px;
border-radius: 10px;
position: fixed;
box-shadow: 0 2px 4px rgba(0,0,0,0.2);
left: 100px;

@media (max-width: 1000px) {
    left: 65px;
}

&::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
     width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #FF3B30;
}
`;

const NotiLike = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;

`

const NotiComments = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
`

const NotiToggle = ({likeCount, $isNotificationOpen}) => {
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        if (!likeCount || $isNotificationOpen) {
            setDisplay('none');
        } else {
            setDisplay('flex');
            const timer = setTimeout(() => {
                setDisplay('none');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [likeCount, $isNotificationOpen]);
    return (
        <Ballon style={{display:display}}>
            <NotiLike >
                <NotiHeart style ={{marginRight:'5px'}}/>
                <span>{likeCount}</span>
            </NotiLike>
            {/* <NotiComments>
                <NotiComment style ={{marginRight:'5px'}}/>
                <span>1</span>
            </NotiComments> */}
        </Ballon>
    )
}

export default NotiToggle;