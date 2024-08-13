import React from 'react'

const UserProfile = (props) => {
  return (
    <div className='userProfile'>
      <div className="username">Jobseeker</div>
      <hr />
      <ul className='user-abt'>
        <li className='abt-title'> Description <p className='abt-desc'> Aspiring Web Developer with a strong passion for learning
and a keen ability to adapt to new challenges. Proficient in
foundational web development skills and knowledgeable in
Data Structures and Algorithms (DSA). Committed to
continuous improvement and eager to apply technical
knowledge and creativity to contribute to dynamic web
development projects. 
 </p></li>
        <li className='abt-title'> Experience <p className='abt-desc'> Fresher </p></li>
        <li className='abt-title'> Skills <p className='abt-desc'> <ul>
            <li>Programming Languages:
            C, C++, Python, HTML,
            CSS, JavaScript</li>
            <li>Web development tools:React</li>
            <li>Databases: SQL Python</li>
            </ul> </p></li>
        <li className='abt-title'> Contact <p className='abt-desc'> <ul>
             <li>Ph no. 9989567860</li>
             <li>E-mail: niksu@gmail.com</li>
            </ul> </p></li>
            {props.isAdded && <li className='abt-title'>{props.head} <p className='abt-desc'>{props.desc}</p></li> }
      </ul>
    </div>
  )
}

export default UserProfile
