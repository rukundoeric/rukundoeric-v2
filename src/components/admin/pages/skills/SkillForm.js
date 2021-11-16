/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Content, TextInput, TextArea, SelectInput,
} from '../../../common';

export default function SkillForm({ btnText }) {
  return (
    <Content className="container mt-5">
      <form>
        <TextInput
          name="skill_name"
          title="Skill name:"
          placeholder="Enter the name of the skill"
          icon="icon-info"
        />
        <TextArea
          title="Description:"
          name="description"
          placeholder="Enter the description"
        />
        <TextInput
          name="year_of_exp"
          title="Years of experience:"
          placeholder="Enter your years of experience"
          icon="icon-info"
        />
        <TextInput
          name="icon_url"
          title="Icon:"
          placeholder="Enter the URL of the Icon"
          icon="icon-link"
        />
        <SelectInput
          name="skill_level"
          options={['Professional', 'Expert', 'Advanced']}
        />
        <Content className="my-3">
          <button type="submit" className="boxed-btn">{btnText}</button>
        </Content>
      </form>
    </Content>
  );
}
