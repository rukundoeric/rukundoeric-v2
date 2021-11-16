import React from 'react';
import { Content } from '../common';
import Banner from '../layouts/banner';
import About from '../layouts/about';
import Projects from '../layouts/projects';
import Skills from '../layouts/skills';
import WorkHistory from '../layouts/work';

const Home = () => (
  <Content className="home_content">
    <Banner />
    <About />
    <Skills />
    <Projects />
    <WorkHistory />
  </Content>
);

export default Home;
