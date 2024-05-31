import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Adithya from '../../assets/Adithya SS.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={Adithya} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>As a Fresher Full Stack Developer skilled in building dynamic responsive web applications, implementing
RESTful APIs, and optimizing front-end performance.</p>
                <p>Seeking a dynamic role to apply technical prowess
and contribute to cutting-edge projects in a collaborative environment.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Java</p> <hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>SpringBoot</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React.js</p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>SQL</p> <hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Python</p> <hr style={{width:"55%"}} /></div>
                <div className="about-skill"><p>C#</p> <hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
      </div> */}
    </div>
  )
}

export default About
