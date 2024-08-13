import React,{useState,useEffect} from 'react'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmployerProfile from './EmployerProfile';
import EmployerApp from './EmployerApp';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import infoUser from '../../recoil/infoUser';
import jobDataAtom from '../../recoil/jobDataAtom';
import apiDataAtom from '../../recoil/apiDataAtom';




const EmployerHeader = () => {
  const jobListings = [
    {
      jobTitle : 'Front-End Developer', 
      jobStatus: 'Vacant',
      jobDesc: 'We are looking for a talented Front-End Developer to join our dynamic team. You will be responsible for building and implementing the user interface of our web applications, ensuring a seamless and intuitive user experience. Your role will involve working closely with the design and backend teams to create responsive and visually appealing web pages.',
      jobReq: 'Proficiency in HTML, CSS, and JavaScript',
      jobDead: 'August 31, 2024',
      jobLocation:'New York, NY',
    },
    {
      jobTitle : 'Backend Developer', 
      jobStatus: 'Vacant',
      jobDesc: 'We are seeking a skilled Backend Developer to join our tech team. The successful candidate will be responsible for server-side logic, database management, and integration of the front-end elements built by your colleagues. You will ensure high performance and responsiveness to requests from the front-end.',
      jobReq: 'Strong knowledge of Node.js, Express, and MongoDB',
      jobDead: 'September 15, 2024',
      jobLocation:'San Francisco, CA',
    },
  ]
  const [jobData, setJobData] = useRecoilState(jobDataAtom)
 
  const navigate = useNavigate()
  const [infoUsername, setInfoUsername] = useRecoilState(infoUser)
  
  const [remove, setRemove] = useState(true)
  const [profile, setProfile] = useState(false)
  const [app, setApp] = useState(false)
  const [apiData,setApiData] = useRecoilState(apiDataAtom)

  const clickProfile = () => {
    setRemove(false)
    setProfile(true)
    setApp(false)
  }

  const clickApp = () => {
    setRemove(false)
    setProfile(false)
    setApp(true)
  }

  const clickClose = () => {
    setRemove(true)
    setProfile(false)
    setApp(false)
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/initial_call',{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      },
     
    }).then((response)=>response.json())
    .then((data) => {
      console.log(data);
      setApiData(data);
      setJobData(data.todo_data); 
      }
    )
    .catch((error)=>{
      console.log('Error',error)
    })
  }, [])
  return (
    <div>
      
      <div className="employer-container">
      <div className="employer-header">Hello Employer,</div>
      <button className='employer-icon' ><LogoutRoundedIcon 
       onClick={()=>{localStorage.clear();navigate('/');setInfoUsername(false)}}
       fontSize='large'/></button>
      </div>
      <hr className='employerHeader-line'/>
     {(profile || app) && <button className='employer-close' onClick={clickClose}><CloseRoundedIcon/></button> } 
     {profile && <EmployerProfile/>}
     {app && <EmployerApp />}
   {remove && <div className="employer-btn-container">
        <button onClick={clickProfile} className='employer-btn' id='employer-user'><PersonRoundedIcon style={{ fontSize: '100px' }}  /></button>
        <button onClick={clickApp} className='employer-btn' id='employer-dash'><GridViewRoundedIcon style={{fontSize:'100px'}}/></button>
    </div> } 
    </div>
  )
}

export default EmployerHeader
