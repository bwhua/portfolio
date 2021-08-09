import React from 'react'
import profile from './img/profile.jpg'
const Home = () => {
  return (
    <div id="home">
      <section className="intro" id="home">
        <h1 className="section_title section_title-intro"> 
          Hello! I am <strong>Brandon Hua</strong>
        </h1>
        <p className="section_subtitle section_subtitle-intro">
          software engineer/developer
        </p>
        <img src={profile} alt="Profile Pic" width="500px" height="500px" className="intro-img"></img>

      </section>
    </div>

  )
}

export default Home
