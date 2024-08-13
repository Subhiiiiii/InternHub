import React ,{useRef} from 'react'
import { useRecoilState } from 'recoil'
import addJobAtom from '../../recoil/addJobAtom'

const AddJob = () => {
  const [addJobOverlay, setAddJobOverlay] = useRecoilState(addJobAtom)
  

    const titleRef = useRef(null)
    const descRef = useRef(null)
    const reqRef = useRef(null)
    const locRef = useRef(null)
    const deadRef = useRef(null)
    

    const addJobHandler = (e) => {
      e.preventDefault()
      const data = {
        jobTitle: titleRef.current.value,
        jobDesc: descRef.current.value,
        jobReq:reqRef.current.value,
       
        jobDead:deadRef.current.value, 
        jobLocation:locRef.current.value,
      }
      fetch('http://127.0.0.1:8000/create_job',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((response)=>response.json())
      .then((data) => {
        console.log(data);
        
        setAddJobOverlay(false)
      })
      .catch((error)=>{
        console.log('Error',error)
      })
    }

  return (
    <div className='add-job-container'>
        <div className='add-job-contents'>
            <h1>New Job</h1>

            <form onSubmit={addJobHandler} className='add-job-form'>
                <input ref={titleRef} type="text" placeholder='Title' />
                <textarea ref={descRef} cols='30' rows='15'  placeholder='Desc'></textarea>
                <textarea ref={reqRef} cols='10' rows='5' type="text" placeholder='Requirements' />
                
                <input ref={deadRef} type="date"  placeholder='Deadline'/>
                <input ref={locRef} type="text" placeholder='Location' />
                <button>Add</button>
            </form>
        </div>
      
    </div>
  )
}

export default AddJob
