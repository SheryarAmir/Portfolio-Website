import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/profile_img.svg"
const About = () => {
  return (
    <div className='about'>
        <div className="about-tittle">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>

<div className="about-section">
<div className="about-left">
    <img src={profile_img} alt="" />
</div>

<div className="about-right">
    <div className="about-para">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe non corrupti fuga maxime adipisicing elit. Optio saepe non corrupti fuga  </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe non corrupti fuga maxime adipisicing elit. Optio saepe non corrupti fuga </p>
    </div>
    <div className="about-skills">
        <div className="aboutskill"> <p>Html AND css</p><hr style={{width:"50%"}} /> </div>
        <div className="aboutskill"> <p>Javscript</p><hr style={{width:"70%"}} /> </div>
        <div className="aboutskill"> <p>React JS</p><hr style={{width:"60%"}} /> </div>
        <div className="aboutskill"> <p>Next js</p><hr style={{width:"50%"}} /> </div>
    </div>
</div>
</div>
      
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEAR OF EXPERIENCE</p>
        </div>
<hr />
<div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECT COMPELETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
