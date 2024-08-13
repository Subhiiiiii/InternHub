import React, { useState, useEffect } from 'react';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import UserProfile from './UserProfile';
import JobFilter from './JobFilter';
import JobApplication from './JobApplicaion'; // Corrected spelling
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userInfo from '../../recoil/userInfo';

const JobHeader = () => {
  const [usernameInfo, setUsernameInfo] = useRecoilState(userInfo);
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState(false);
  const [userFilter, setUserFilter] = useState(false);
  const [userApp, setUserApp] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null); // For storing the selected job

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/jobs/')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  const profile = () => {
    setUserProfile(true);
    setUserFilter(false);
    setUserApp(false);
  };

  const filter = () => {
    setUserProfile(false);
    setUserFilter(true);
    setUserApp(false);
  };

  const application = (job) => {
    setSelectedJob(job); // Store the selected job
    setUserProfile(false);
    setUserFilter(false);
    setUserApp(true);
  };

  return (
    <div>
      <div className="job-container">
        <div className="job-header">Hello Jobseeker,</div>
        <button
          className="job-icon"
          onClick={() => {
            localStorage.clear();
            navigate('/');
            setUsernameInfo(false);
          }}
        >
          <LogoutRoundedIcon fontSize="large" />
        </button>
      </div>
      <hr className='jobHeader-line' />
      <div className="job-info">
        <div className="job-btn-container">
          <button
            onClick={profile}
            id={userProfile && 'job-btn-active'}
            className="profile-btn"
          >
            <AccountCircleRoundedIcon /> Profile
          </button>
          <button
            onClick={filter}
            id={userFilter && 'job-btn-active'}
            className="filter-btn"
          >
            <FilterAltIcon /> Filters
          </button>
          <button
            onClick={() => application(selectedJob)} // Call application with the selected job
            id={userApp && 'job-btn-active'}
            className="application-btn"
          >
            <AddBoxRoundedIcon /> Applications
          </button>
        </div>
        <div>{userProfile && <UserProfile />}</div>
        <div>{userFilter && <JobFilter data={jobs} onApply={application} />}</div> 
        {/* Pass the application function to JobFilter */}
        <div>{userApp && <JobApplication job={selectedJob} />}</div> 
        {/* Pass only the selected job to JobApplication */}
      </div>
    </div>
  );
};

export default JobHeader;
