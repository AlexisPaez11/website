import React from 'react'

const Skills = () => {
  return (
    <div className='skills-section'>
      <div className='skills-container'>
        <h3>Tecnologías</h3>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>Tailwind</span>
            <span>Sass</span>
            <span>Less</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Next JS</span>
          </div>
      </div>

      <div className='skills-container'>
        <h3>Herramientas</h3>
          <div className="skills">
            <span className="tool">VSCode</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>NPM</span>
            {/* <span>Wordpress</span> */}
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Notion</span>
          </div>
      </div>
    </div>
  )
}

export default Skills