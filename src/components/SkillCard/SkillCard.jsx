import React from 'react'
import './SkillCard.css'

const SkillCard = ({ 
  name, 
  icon, 
  color, 
  bgColor,
  level = "Advanced",
  description 
}) => {
  return (
    <div className="skill-card">
      <div 
        className="skill-card__icon"
        style={{
          backgroundColor: bgColor || '#2a2a2a',
          color: color || '#ffffff'
        }}
      >
        {/* Use FontAwesome icon or custom icon */}
        {icon && icon.startsWith('fa') ? (
          <i className={icon}></i>
        ) : (
          <span className="skill-card__icon-text">{icon}</span>
        )}
      </div>
      
      <div className="skill-card__content">
        <h4 className="skill-card__name">{name}</h4>
        <span className="skill-card__level">{level}</span>
        {description && (
          <p className="skill-card__description">{description}</p>
        )}
      </div>
      
      {/* Hover overlay with additional info */}
      <div className="skill-card__overlay">
        <div className="skill-card__overlay-content">
          <h4 className="skill-card__overlay-title">{name}</h4>
          <span className="skill-card__overlay-level">{level}</span>
          {description && (
            <p className="skill-card__overlay-description">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SkillCard