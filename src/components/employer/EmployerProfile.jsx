import React from 'react'

const EmployerProfile = () => {
  return (
    <div className='employer-profile-container'>
      <div className="employer-name">Employer</div>
      <hr className='employer-line' />
      <div className='employer-bullet' >
        <ul className="employer-details">
        <li className='employer-title'>Position:<p className='employer-desc'>Human Resources Manager</p></li>
        <li className='employer-title'>Contact Information:<p className='employer-desc'>
            <ul>
                <li>Email: samantha.johnson@example.com</li>
                <li>Phone: (123) 456-7890</li></ul></p></li>
        <li className='employer-title'>Summary:<p className='employer-desc'>An experienced Human Resources Manager with over 8 years of experience in talent acquisition, employee relations, and performance management. Skilled in developing HR strategies that align with company goals, improving employee satisfaction, and fostering a positive workplace culture. Passionate about creating opportunities for employee growth and development.</p></li>
        <li className='employer-title'>Key Skills:
        <p className='employer-desc'>
            <ul>
                <li>Talent Acquisition & Recruitment</li>
                <li>Performance Management</li>
            </ul>
            </p></li>
        <li className='employer-title'>Education:
        <p className='employer-desc'>Bachelor of Business Administration in Human Resources Management
        University of New York, New York, NY</p></li>
        </ul>
      </div>
    </div>
  )
}

export default EmployerProfile
