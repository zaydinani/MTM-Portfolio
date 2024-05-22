import React from "react";
import "../scss/Skills.scss";
import skillsList from  "../data/skills";


const Skills = () => {
  return (
    <div id="my_skills">
      <h2>My Tech Toolbox</h2>
      <div className="bg-box">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.imgSrc} className={skill.name} alt={skill.name} />
            <p className={'p-'+skill.name }>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
