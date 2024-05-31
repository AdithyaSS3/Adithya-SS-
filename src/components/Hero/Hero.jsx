import React from 'react'
import './Hero.css'
import Adithya from '../../assets/Adithya SS.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../components/Hero/AdithyaSS.pdf'



const Hero = () => {

  // const ResumeButton = () => {
  //   const downloadResume = () => {
  //   const resumePath = {resume};
  //   console.log(adithya);
  //     window.open(resumePath, ' ');
  //   };

  return (
    <div id='home' className='hero'>
        <img src={Adithya} alt="" />
        <h1> <span>I'm Adithya SS,</span> Full Stack Developer </h1>
        <p>I am a Full Stack Developer skilled in building dynamic responsive web applications, implementing
RESTful APIs, and optimizing front-end performance.</p>
    <div className="hero-action">
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      {/* <div className="hero-resume" >My resume</div> */}
      <a className="hero-resume" href={resume} download="./AdithyaSS.pdf">My resume</a>
  
    </div>
    </div>
  )
}
//  }

export default Hero
