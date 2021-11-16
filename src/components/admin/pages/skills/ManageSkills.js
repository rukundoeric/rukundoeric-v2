/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Content } from '../../../common';
import { skills as skillContent } from '../../../../data/index.json';

export default function Home() {
  const [skills, setSkills] = useState(skillContent.skills);

  return (
    <Content className="container">
      <Content
        className="row d-flex justify-content-center align-items-center mt-5"
      >
        {skills.map(item => (
          <Content
            label={item.name}
            className="icon9 justify-content-center align-items-center"
          >
            <img src={item.icon} alt={item.name} label={item.name} />
            <span className="edit-skill"><i className="ti-pencil-alt" /></span>
            <span className="delete-skill"><i className="ti-trash" /></span>
          </Content>
        ))}
      </Content>
      <Content className="my-3">
        <Link to="/admin/skills/new" className="boxed-btn">Add new skill</Link>
      </Content>
    </Content>
  );
}
