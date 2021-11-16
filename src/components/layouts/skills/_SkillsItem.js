/* eslint-disable react/prop-types */
import React from 'react';
import { FloatingButton as SIcon, Content } from '../../common';

export default function SkillItem({
  icon, iconStyle, title,
}) {
  return (
    <Content
      className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate"
    >
      <Content className="media block-6 services d-block text-center">
        <SIcon styleClass={iconStyle} icon={icon} />
        <Content className="media-body py-md-4">
          <h3>{title}</h3>
        </Content>
      </Content>
    </Content>
  );
}
