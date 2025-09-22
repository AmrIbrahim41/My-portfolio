import React from 'react'
import './Home.css'
import { links } from '../../Links/Links'

const Home = () => {

  const handleDownloadCV = () => {
    const CV = "./CV.docx";
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV.docx";
    link.click();
  }
  return (
    <section className="home" id="home">
      <div className="home__container">
        {/* Left Content Section */}
        <div className="home__content">
          <div className="home__text">
            <h1 className="home__title">Hi I'm Amr</h1>
            <h2 className="home__subtitle">Frontend Developer</h2>
            
            <div className="home__description">
              <p>
                I am a passionate Frontend Developer and BIS student with hands-on experience in 
                building responsive and interactive web applications. Skilled in HTML, CSS, Java, 
                and React, I focus on creating user-friendly designs with high 
                performance. Currently, I am expanding my skills through Full Stack Development training
                 to deliver complete web solutions.
              </p>
              
            </div>

            {/* Social Media and Actions */}
            <div className="home__actions">
                <a href={links.phone}>
              <button className="home__contact-btn">Contact Me</button>
                </a>
              
              <div className="home__social">
                <a href={links.instagram} className="home__social-link Instagram" aria-label="Instagram" target='_blank' rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={links.linkedin} className="home__social-link LinkedIn" aria-label="LinkedIn" target='_blank' rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={links.facebook} className="home__social-link facebook" aria-label="Facebook" target='_blank' rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={links.whatsapp} className="home__social-link whatsapp" aria-label="whatsapp" target='_blank' rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href={links.github} className="home__social-link github" aria-label="github" target='_blank' rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            {/* Download CV */}
            <div className="home__download">
              <a href="#" className="home__download-link">
                <i className="fas fa-download"></i>
                <span onClick={handleDownloadCV}>Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="home__image">
          <div className="home__image-container">
            {/* Tech Icons */}
            <div className="home__tech-icon home__tech-icon--bootstrap">
              <span>B</span>
            </div>
            <div className="home__tech-icon home__tech-icon--js">
              <span>JS</span>
            </div>
            <div className="home__tech-icon home__tech-icon--figma">
              <i className="fab fa-figma"></i>
            </div>
            <div className="home__tech-icon home__tech-icon--html">
              <i className="fab fa-html5"></i>
            </div>
            <div className="home__tech-icon home__tech-icon--react">
              <i className="fab fa-react"></i>
            </div>
            
            {/* Main Image Placeholder */}
            <div className="home__image-main">
              <div className="home__image-bg">
                {/* Profile image would go here */}
                <div className="home__image-placeholder">
                  <img src="./user_1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home