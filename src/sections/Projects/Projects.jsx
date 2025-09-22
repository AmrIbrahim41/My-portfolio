import React, { useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeFilter, setActiveFilter] = useState('All')

  // Sample project data - you can easily add more projects here
  const projects = [
    {
      id: 1,
      image: './project_1.png',
      title: 'Portfolio for Girls',
      category: 'Portfolio',
      description: '',
      link: 'https://rana-sherif.netlify.app/',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      tags: ['Web', 'React', 'Mobile']
    },
    {
      id: 2,
      image: './project_2.png',
      title: 'Sales Portfolio',
      category: 'Portfolio',
      description: '',
      link: 'https://ahmed-tarek.netlify.app/',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      tags: ['Web', 'React', 'Mobile']
    },
    {
      id: 3,
      image: './project_3.png',
      title: 'Sales Portfolio',
      category: 'Portfolio ',
      description: '',
      link: 'https://el-sayed-41.netlify.app/',
      technologies: ['Next.js', 'Tailwind CSS'],
      tags: ['Web', 'React', 'Mobile']
    }
  ]

  const filters = ['All', 'Web','Mobile']

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  const projectsPerSlide = 3
  const maxSlides = Math.ceil(filteredProjects.length / projectsPerSlide)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + maxSlides) % maxSlides)
  }

  const getCurrentProjects = () => {
    const start = currentSlide * projectsPerSlide
    const end = start + projectsPerSlide
    return filteredProjects.slice(start, end)
  }

  return (
    <section className="projects" id="project">
      <div className="projects__container">
        {/* Header Section */}
        <div className="projects__header">
          <h2 className="projects__title">
            <span className="projects__title-accent">My</span> Projects
          </h2>
          
          <p className="projects__description">
            
          </p>

          {/* Filter Tags */}
          <div className="projects__filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`projects__filter ${activeFilter === filter ? 'projects__filter--active' : ''}`}
                onClick={() => {
                  setActiveFilter(filter)
                  setCurrentSlide(0) // Reset to first slide when filter changes
                }}
              >
                #{filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Navigation */}
        <div className="projects__content">
          {/* Navigation Arrows */}
          <button 
            className="projects__nav projects__nav--prev"
            onClick={prevSlide}
            disabled={maxSlides <= 1}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Projects Grid */}
          <div className="projects__grid">
            <div 
              className="projects__slides"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {Array.from({ length: maxSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="projects__slide">
                  {filteredProjects
                    .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                    .map((project) => (
                      <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        category={project.category}
                        description={project.description}
                        link={project.link}
                        technologies={project.technologies}
                      />
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button 
            className="projects__nav projects__nav--next"
            onClick={nextSlide}
            disabled={maxSlides <= 1}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Slide Indicators */}
        {maxSlides > 1 && (
          <div className="projects__indicators">
            {Array.from({ length: maxSlides }, (_, index) => (
              <button
                key={index}
                className={`projects__indicator ${currentSlide === index ? 'projects__indicator--active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Decorative Lines */}
      <div className="projects__line projects__line--top"></div>
      <div className="projects__line projects__line--bottom"></div>
    </section>
  )
}

export default Projects