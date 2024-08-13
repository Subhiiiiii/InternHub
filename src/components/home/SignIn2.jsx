import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import infoUser from '../../recoil/infoUser';
import userInfo from '../../recoil/userInfo';

const SignIn2 = () => {
 
  const [infoUsername, setInfoUsername] = useRecoilState(infoUser)
  const [usenamerInfo,setUsernameInfo] = useRecoilState(userInfo)


  const [userActive, setUserActive] = useState(false);
  const [passActive, setPassActive] = useState(false);


  const userClick = () => {
    setUserActive(true);
    setPassActive(false);
  };

  const passClick = () => {
    setUserActive(false);
    setPassActive(true);
  };


  const userNameRef = useRef(null);
  const passWordRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const credentialsUser = {
      userName: userNameRef.current.value,
      passWord: passWordRef.current.value,
    };
    fetch('http://127.0.0.1:8000/employer',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentialsUser)
    }).then((response)=>response.json())
    .then((data) => {
      console.log(data);
      if(data.status === 'success'){
        localStorage.setItem('userStatus', true)
        setInfoUsername(true)
        setUsernameInfo(false)
      }else{
        localStorage.setItem('userStatus', false)
      }
    })    
    .catch((error)=>{
      console.log('Error',error)
    })
  }

  

 

  return (
    <div>
      <form onSubmit={onSubmit} className="signi-box">
        <input
          onClick={userClick}
          id={userActive && 'userActive'}
          className="signin-placeholder"
          type="text"
          ref={userNameRef}
          placeholder="Username"
        />
        <input
          onClick={passClick}
          id={passActive && 'userActive'}
          className="signin-placeholder"
          type="password"
          ref={passWordRef}
          placeholder="Password"
        />
        <button className="signin-button">Login</button>
      </form>
      
    </div>
  );
};

export default SignIn2;
