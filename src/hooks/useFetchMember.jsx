import { useEffect, useState } from 'react';


export function useFetchMember(isLoggedIn) {
  const [users, setUsers] = useState(null);
  const [profileImg, setProfileImg] = useState('');
  const BASE_URL= process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/members/getMember`, {
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 401) {
          setProfileImg('');
        }
        else if (data.status === 200) {
          const member = data.member;
          setUsers(member);
          setProfileImg(BASE_URL + member.memberProfileImage);
        }
      });
  }, [isLoggedIn]);

  return { users, profileImg,setProfileImg };
}