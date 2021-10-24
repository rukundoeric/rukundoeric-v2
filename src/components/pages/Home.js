import { Content } from '../common';
import React from 'react'
import Banner from '../layouts/banner';
import About from '../layouts/about';
import Projects from '../layouts/projects';
import Skills from '../layouts/skills'

const Home = () => {
  return(
    <Content className="home_content">
      <Banner />
      <About />
      <Skills />
      <Projects />
    </Content>
  )
}

export default Home;