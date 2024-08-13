import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import userInfo from '../../recoil/userInfo'
import infoUser from '../../recoil/infoUser';

const SignIn = () => {
  const [usenamerInfo,setUsernameInfo] = useRecoilState(userInfo)
  const [infoUsername, setInfoUsername] = useRecoilState(infoUser)


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


  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const userCredentials = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    fetch('http://127.0.0.1:8000/jobseeker',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }).then((response)=>response.json())
    .then((data) => {
      console.log(data);
      if(data.status === 'successful'){
        localStorage.setItem('validUser', true)
        setUsernameInfo(true)
        setInfoUsername(false)
      }else{
        localStorage.setItem('validUser', false)
      }
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  }

  

 

  return (
    <div>
      <form onSubmit={onSubmit} className="signin-box">
        <input
          onClick={userClick}
          id={userActive && 'userActive'}
          className="signin-placeholder"
          type="text"
          ref={usernameRef}
          placeholder="Username"
        />
        <input
          onClick={passClick}
          id={passActive && 'userActive'}
          className="signin-placeholder"
          type="password"
          ref={passwordRef}
          placeholder="Password"
        />
        <button className="signin-button">Login</button>
      </form>
      
    </div>
  );
};

export default SignIn;
