import React from 'react'

function About() {
  return (
    <div >
      <section id="page-header" className="about-header section-p1">
        <h2>#KnowUS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </section>

      <section id="about-head" className="section-p1 container about-head">
        <img src="/a6.jpg" alt="about" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <abbr title="">Create stunning images with as much or as little control as you like.</abbr>
          <br /><br />
          <div className="marquee">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</div>
        </div>
      </section>

      <section id="about-app" className="section-p1 container about-app">
        <h1>Download Our <a href="#">APP</a></h1>
        <div className="video">
          <video autoPlay muted loop src="/1 (1).mp4" />
        </div>
      </section>
      </div>
  )
}

export default About
