import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        {/* Left Image Section */}
        <div className="about__image">
          <div className="about__image-container">
            {/* Decorative Elements */}
            <div className="about__decoration about__decoration--circle"></div>
            <div className="about__decoration about__decoration--square"></div>
            <div className="about__decoration about__decoration--triangle"></div>

            {/* Main Image */}
            <div className="about__image-main">
              <div className="about__image-bg">
                {/* Profile image placeholder - replace with actual image */}
                <div className="about__image-placeholder">
                  <img src="./user_2.png" alt="Profile" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">
              About <span className="about__title-accent">Me</span>
            </h2>

            <div className="about__description">
              <p>
                "I am Amr Ibrahim, a BIS student and passionate Frontend Developer. With strong skills in HTML, CSS, Java, and React, I specialize in creating modern, responsive, and user-friendly websites.

                Beyond technical expertise, I have professional experience in sales and personal training, which shaped my communication, leadership, and problem-solving skills. Currently, I am pursuing Full Stack Development training to expand my abilities and deliver complete web solutions.

                I am always eager to learn, collaborate, and turn creative ideas into impactful digital experiences."
              </p>


            </div>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="about__line about__line--top"></div>
      <div className="about__line about__line--bottom"></div>
    </section>
  )
}

export default About