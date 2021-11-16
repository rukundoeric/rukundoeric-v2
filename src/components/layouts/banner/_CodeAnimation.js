import React from 'react';
import Code from './_Code';
import { FloatingButton, Content } from '../../common';

export default function CodeAnimation() {
  return (
    <Content className="col-xl-6 col-lg-6 mt-5 code-area justify-content-center align-items-center">
      <Content className="content-d d-flex mt-auto justify-content-center align-items-center">
        <Content className="icon d-none d-lg-flex">
          <FloatingButton icon="fa fa-chevron-right" styleClass="icon6" />
        </Content>
        <Content className="code align-items-center">
          <Code />
        </Content>
      </Content>
    </Content>
  );
}
