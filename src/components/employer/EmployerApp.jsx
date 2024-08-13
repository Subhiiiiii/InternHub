import React,{useState,useEffect} from 'react'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import AddJob from './AddJob';
import { useRecoilState } from 'recoil';
import addJobAtom from '../../recoil/addJobAtom';
import apiDataAtom from '../../recoil/apiDataAtom';
import jobDataAtom from '../../recoil/jobDataAtom';

const EmployerApp = () => {
   

  const [jobData, setJobData] = useRecoilState(jobDataAtom)

  const [addJobOverlay, setAddJobOverlay] = useRecoilState(addJobAtom)
  const [completedJobs, setCompletedJobs] = useState([]);

   const clickDone = (index) => {
        setCompletedJobs((prev) => [...prev, index]);
    };

// useEffect(() => {
// console.log(addJobOverlay)
// }, [addJobOverlay])



  return (
    <div className='relative'>
      {
        addJobOverlay &&  <div><div className='add-overlay' onClick={()=> setAddJobOverlay(null)}></div>
        <AddJob/></div>
      }
      
      {jobData.map((data, index)=>{
      const isJobDone = completedJobs.includes(index);
        return(
            <div className="job-listing-container" id={isJobDone ? 'JobCompleted' : 'no'}
            style={{ opacity: isJobDone ? 0.5 : 1 }}>
                <div>
                    <div className='jobEditor'>
                <div className='jobTitle'>{data.jobTitle}</div>
                  <div className="jobBtn">
                    <div id='jobEdit'><EditRoundedIcon/></div>
                    <div id='jobDelete'><DeleteRoundedIcon/></div>
                    <div onClick={()=>clickDone(index)} id='jobDone'><DoneOutlineRoundedIcon/></div>
                  </div>
                  </div>
                <div><p className='jobDesc'>{data.jobDesc}</p></div>
                <div className='jobExtra'>Requirements: <p className='jobExp'>{data.jobReq}</p></div>
                <div className='jobExtra'>Location: <p className='jobExp'>{data.jobLocation}</p></div>
                <div className='jobExtra'>Deadline: <p className='jobExp'>{data.jobDead}</p></div>
                </div>
               
            </div>
        )
      })}
         <center><button onClick={()=>{
          if(addJobOverlay){
            setAddJobOverlay(null)
          }else{
            setAddJobOverlay(true)
          }
         }} className='employer-post'>POST</button></center>
      </div>
    
  )
}

export default EmployerApp
