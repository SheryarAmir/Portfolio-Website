import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Sheryar Amir,</span> Front end Developer based in Gilgit Pakistan.</h1>
      <p>I am front end developer from Gilgit Pakistan. with 3 Years of experince im multiple companies like Google, Meta, Apple, and Teala.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact" >Connect With me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
    
      </div>
    </div>
  )
}

export default Hero;
