import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
const Education = () => {
  return (
    <div id='education' className='education'>
        <div className="education-title">
            <h1>Education</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="education-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="education-format">
                       
                        <h1>{service.s_name}</h1>
                        <h2>{service.s_major}</h2>
                        <p>{service.s_desc}</p>
                        
                </div>
            })}
      </div>
    </div>
  )
}

export default Education
