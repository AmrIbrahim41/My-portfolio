import React from 'react';
import './Skills.css';
import SkillCard from '../../components/SkillCard/SkillCard';

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      name: 'HTML5',
      icon: 'fab fa-html5',
      color: '#ffffff',
      bgColor: '#e34c26',
      level: 'Advanced',
      description: 'Semantic markup, accessibility, and modern HTML5 features for structured web content.'
    },
    {
      id: 2,
      name: 'CSS3',
      icon: 'fab fa-css3-alt',
      color: '#ffffff',
      bgColor: '#1572b6',
      level: 'Advanced',
      description: 'Advanced styling, animations, Grid, Flexbox, and responsive design techniques.'
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: 'fab fa-js-square',
      color: '#000000',
      bgColor: '#f0db4f',
      level: 'Advanced',
      description: 'ES6+, DOM manipulation, async programming, and modern JavaScript frameworks.'
    },
    {
      id: 4,
      name: 'React',
      icon: 'fab fa-react',
      color: '#ffffff',
      bgColor: '#61dafb',
      level: 'Advanced',
      description: 'Component-based architecture, hooks, state management, and modern React patterns.'
    },
    // {
    //   id: 5,
    //   name: 'Node.js',
    //   icon: 'fab fa-node-js',
    //   color: '#ffffff',
    //   bgColor: '#68a063',
    //   level: 'Intermediate',
    //   description: 'Server-side JavaScript, API development, and full-stack web applications.'
    // },
    {
      id: 6,
      name: 'Bootstrap',
      icon: 'fab fa-bootstrap',
      color: '#ffffff',
      bgColor: '#7952b3',
      level: 'Advanced',
      description: 'Responsive design framework with grid system and component library.'
    },
    {
      id: 7,
      name: 'Canva',
      icon: 'fa-solid fa-cannabis',
      color: '#ffffff',
      bgColor: '#f24e1e',
      level: 'Advanced',
      description: 'UI/UX design, prototyping, and collaborative design workflow tools.'
    },
    {
      id: 8,
      name: 'Git',
      icon: 'fab fa-git-alt',
      color: '#ffffff',
      bgColor: '#f34f29',
      level: 'Advanced',
      description: 'Version control, branching strategies, and collaborative development workflows.'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <h2 className="skills__title">My Skills</h2>
          <div className="skills__decoration">
            <div className="skills__decoration-line"></div>
            <div className="skills__decoration-dot"></div>
            <div className="skills__decoration-line"></div>
          </div>
          <p className="skills__subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills__grid">
          {skillsData.map(skill => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              bgColor={skill.bgColor}
              level={skill.level}
              description={skill.description}
            />
          ))}
        </div>

        <div className="skills__background-decoration">
          <div className="skills__bg-circle skills__bg-circle--1"></div>
          <div className="skills__bg-circle skills__bg-circle--2"></div>
          <div className="skills__bg-circle skills__bg-circle--3"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;