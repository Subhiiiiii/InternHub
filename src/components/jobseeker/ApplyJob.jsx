import React,{useState} from 'react'
import UserProfile from './UserProfile'
import JobFilter from './JobFilter'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const jobs = [
    {
      title:'Web Developer',
      experience: 'Experience: 2 years',
      salary: 'Salary: 5000/month',
      skills: 'Skills: ReactJS, Node.js',
    },
    {
      title:'Cloud Computing',
      experience: 'Experience: 1 year',
      salary: 'Salary: 15,000/month',
      skills: 'Skills: Linux,DevOps',
    },
    {
      title:'Front-end Developer',
      experience: 'Experience: Fresher',
      salary: 'Salary: 2000/month',
      skills: 'Skills: ReactJS,HTML,CSS',
    },
    {
      title:'Senior Java Software Engineer',
      experience: 'Experience: 8 years',
      salary: 'Salary: 1,00,000/month',
      skills: 'Skills: Java, J2EE, Spring, Spring boot',
    },
    {
      title:'Lead Software Engineer',
      experience: 'Experience: 5 years',
      salary: 'Salary: 50,000/month',
      skills: 'Skills: Oracle, PL/SQL, JDBC',
    },
    {
      title:'Software Engineer',
      experience: 'Experience: 5 years',
      salary: 'Salary: 5,00,000/month',
      skills: 'Skills: SDLC',
    },
  ]

const ApplyJob = (props) => {

    const [applyClose, setApplyClose] = useState(true)

    const [applyDesc, setApplyDesc] = useState('')
    const [applyText, setApplyText] = useState('')

    const [uploadResume, setUploadResume] =  useState(false)

    const upload = ()=>{
     setUploadResume(true)
    }

    const close = () => {
        setApplyClose(false)
    }

    const write = (e) =>{
      setApplyText(e)
    }

    const add = (desc) =>{
        setApplyDesc(desc)
    }

  return (
<div>
    {applyClose &&  <div >
    <div className='apply-overflow'>
      <div className="apply-job-title">{props.jobTitle}</div>
      <button onClick={close} className='apply-close'><CloseRoundedIcon/></button>
      </div>
      <hr width='800px'/>
      <div className="apply-descbox">
        <div>Anything Extra About You...</div>
        <textarea onChange={(e) => setApplyText(e.target.value)}  className='apply-text'>Add Here...</textarea>
        
      </div>
      <center><button className='apply-add' onClick={()=>setApplyDesc(applyText)}>Add</button></center>
    {uploadResume &&  <div className='apply-resume'><UserProfile desc={applyDesc} head = "About Me" isAdded={true}/></div>}
      <center><button onClick={upload} className='apply-btn'>Upload Resume</button></center>
      
 </div>}
{applyClose === false && <JobFilter data ={jobs}/>}
</div>
  )
}

export default ApplyJob
