import React, { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ApplyJob from './ApplyJob';

const JobFilter = ({ data, onApply }) => {
  const [userApp, setUserApp] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [filter, setFilter] = useState(true);
  const [selected, setSelected] = useState('');

  const filteredData = data.filter(job => {
    return (
      job.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      job.skills.toLowerCase().includes(searchItem.toLowerCase())
    );
  });

  const clickApply = (job) => {
    setSelected(job.title);
    setUserApp(true);
    setFilter(false);
    onApply(job); // Pass the entire job object to the onApply function
  };

  return (
    <div>
      {filter && (
        <div className='filter-main'>
          <div className='filter-heading'>
            <div className="filter-title">Find what's best for you</div>
            <div className='filter-icon'><SearchRoundedIcon fontSize="x-large" /></div>
          </div>
          <hr className='filter-line' width='800px' />
          <div className='filter-search-bar'>
            <input
              className='filter-search'
              type="text"
              placeholder='Search Jobs....'
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <div className='search-icon'><SearchRoundedIcon /></div>
          </div>
          <div className='filter'>
            {filteredData.map((job, index) => {
              return (
                <div key={index} className="filter-job-container">
                  <div className='filter-job-boxes'>
                    <div className='filter-apply'>
                      <div className='job-title'>{job.title}</div>
                      <a
                        className='filter-link'
                        onClick={() => clickApply(job)} // Pass the job object to clickApply
                      >
                        Apply
                      </a>
                    </div>
                    <div className='filter-extras'>
                      <div className='filter-extra'>{job.experience}</div>
                      <div className='filter-extra'>{job.skills}</div>
                      <div className='filter-extra'>{job.salary}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {userApp && <ApplyJob jobTitle={selected} />}
    </div>
  );
};

export default JobFilter;
