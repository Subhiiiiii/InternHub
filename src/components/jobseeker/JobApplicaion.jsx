import React, { useState, useRef } from 'react';
import UserProfile from './UserProfile';

const JobApplicaion = ({ job }) => {
  const [applyText, setApplyText] = useState('');
  const [uploadResume, setUploadResume] = useState(false);
  const [applyDesc, setApplyDesc] = useState('');
  const [showBox, setShowBox] = useState(false);
  
  const clickTimeoutRef = useRef(null);

  const add = (desc) => {
    setApplyDesc(desc);
  };

  const handleClick = () => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current); // Clear the single click timeout if a double click is detected
      clickTimeoutRef.current = null;
      setUploadResume(false); // Hide resume upload
      setShowBox(true); // Show box view on double click
    } else {
      clickTimeoutRef.current = setTimeout(() => {
        setUploadResume(true); // Show resume upload on single click
        setShowBox(false); // Ensure box view is hidden
        clickTimeoutRef.current = null;
      }, 300); // Delay for detecting double click
    }
  };

  const handleChange = (e) => {
    setApplyText(e.target.value);
  };

  if (!job) {
    return <div>No job selected</div>;
  }

  return (
    <div>
      {!showBox && (
        <div className='applying'>
          <div className="apply-job-title">{job.title}</div>
          <div className="apply-descbox">
            <div>Experience: {job.experience}</div>
            <div>Salary: {job.salary}</div>
            <div>Skills: {job.skills}</div>
          </div>
          <div className="apply-descbox">
            <div>Anything Extra About You...</div>
            <textarea
              onChange={handleChange}
              className='apply-text'
              placeholder="Add Here..."
            />
            <center>
              <button
                className='apply-add'
                onClick={() => setApplyDesc(applyText)}
              >
                Add
              </button>
            </center>
          </div>
          <center>
            <button
              className='apply-btn'
              onClick={handleClick}
              onDoubleClick={handleClick}
            >
              Upload Resume
            </button>
          </center>
          {uploadResume && !showBox && (
            <div className='apply-resume'>
              <UserProfile desc={applyDesc} head="About Me" isAdded={true} />
            </div>
          )}
        </div>
      )}
      {showBox && (
        <div className='filter-job-boxes'>
          <div className='filter-apply'>
            <div className='job-title'>{job.title}</div>
          </div>
          <div className='filter-extras'>
            <div className='filter-extra'>{job.experience}</div>
            <div className='filter-extra'>{job.skills}</div>
            <div className='filter-extra'>{job.salary}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicaion;
