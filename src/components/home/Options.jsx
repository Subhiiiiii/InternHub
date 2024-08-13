import React,{useState} from 'react'
import SignIn from './SignIn';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import SignIn2 from './SignIn2';


const Options = () => {
const [signinJob,setSigninJob] = useState(false);
const [signinEmp, setSigninEmp] = useState(false);
const [btn, setBtn] = useState(true);


const signInJob = ()=>{
    setSigninJob(true)
    setSigninEmp(false)
    setBtn(false)
}

const signInEmp = () => {
  setSigninJob(false)
    setSigninEmp(true)
    setBtn(false)
}
  return (
    <div>
     <div className='header'>
      <div className='heading'>InternHub </div>
      <div className='icon'><HubRoundedIcon fontSize="x-large"/></div>
     </div>
     <div>{signinJob && <SignIn/>}</div>
     <div>{signinEmp&& <SignIn2/>}</div>
      <div className='options-container'>
        {btn&&<button onClick={ signInEmp} className='options-btn'>Employer</button>}
       {btn&&<button onClick={ signInJob} className='options-btn'>Job Seeker</button>}  
      </div>
      
    </div>
  )
}

export default Options
