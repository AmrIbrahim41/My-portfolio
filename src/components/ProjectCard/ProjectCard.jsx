import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ 
  image, 
  title, 
  category, 
  description, 
  link, 
  technologies = [] 
}) => {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} />
        <div className="project-card__overlay">
          <div className="project-card__overlay-content">
            <h4 className="project-card__overlay-title">{title}</h4>
            <p className="project-card__overlay-description">{description}</p>
            <div className="project-card__technologies">
              {technologies.map((tech, index) => (
                <span key={index} className="project-card__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="project-card__content">
        <div className="project-card__header">
          <span className="project-card__category">{category}</span>
        </div>
        
        <h3 className="project-card__title">{title}</h3>
        
        <div className="project-card__footer">
          <a 
            href={link} 
            className="project-card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>
            <span>go to project</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard