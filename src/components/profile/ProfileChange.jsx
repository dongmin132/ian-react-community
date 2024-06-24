import styled from "styled-components"
import { useAuth } from "../../context/AuthContext";
import { useFetchMember } from "../../\bhooks/useFetchMember";
import defaultProfile from '../../img/defaultProfile.png';
import { useNavigate } from "react-router-dom";
const ProfileChangeWrapper = styled.div`
    width: 319px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Circle = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 10px;
    overflow:hidden;
   
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        
    }
`
const ChangeButton = styled.span`
    color: #0095f6;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        color: black;
    }
`
const ProfileChange = () => {
    const { isLoggedIn } = useAuth();
    const { users, profileImg, setProfileImg } = useFetchMember(isLoggedIn);
    const navigate = useNavigate();
    return (
        <ProfileChangeWrapper>
            <Circle>
                <img src={profileImg ? profileImg : defaultProfile} alt="profile" />
            </Circle>
            <div style ={{flex:1}}>
                <b>{users ? users.memberNickname : null}</b>
            </div>
            <div>
                <ChangeButton onClick={() => {navigate("/")}}>전환</ChangeButton>
            </div>
        </ProfileChangeWrapper>
    )
}

export default ProfileChange