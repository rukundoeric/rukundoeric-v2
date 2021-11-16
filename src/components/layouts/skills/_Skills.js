/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import _ from 'lodash';
import { skills as skillContent } from '../../../data/index.json';
import SkillInfo from './_SkillInfo';
import { Content } from '../../common';

export default function Skills() {
  const [skills, setSkills] = useState(skillContent.skills);
  const [currentSkill, setCurrrentSkill] = useState(skillContent.skills[0]);

  const position = (clientX, clientY) => {
    const mW = 300;
    const mH = 250;
    const sW = window.screen.width;
    const sH = window.screen.height;
    return {
      x: (sW - clientX) < mW ? clientX - mW : clientX + 20,
      y: (sH - clientY) < mH ? clientY - mH : clientY + 20,
    };
  };

  const handleShowInfo = (e, skillName) => {
    setCurrrentSkill(_.find(skills, ({ name }) => name === skillName));
    document.querySelector('#skillInfo').style.display = 'block';
    const pos = position(e.clientX, e.clientY);
    document.querySelector('#skillInfo').style.left = `${pos.x}px`;
    document.querySelector('#skillInfo').style.top = `${pos.y}px`;
  };

  const handleCloseInfo = () => {
    document.querySelector('#skillInfo').style.display = 'none';
  };
  return (
    <Content className="service-part mt-5 pt-5">
      <SkillInfo skill={currentSkill} />
      <Content className="container">
        <Content className="row justify-content-center">
          <Content className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">{skillContent.title}</span>
          </Content>
        </Content>
        <Content
          className="row d-flex justify-content-center align-items-center"
          onMouseLeave={handleCloseInfo}
        >
          {skills.map((item, i) => (
            <Content
              label={item.name}
              className="icon9 justify-content-center align-items-center"
              onMouseMove={e => { handleShowInfo(e, item.name); }}
            >
              <img src={item.icon} alt={item.name} label={item.name} />
            </Content>
          ))}
        </Content>
      </Content>
    </Content>
  );
}
