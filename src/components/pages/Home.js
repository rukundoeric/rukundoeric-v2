import { Content } from '../common';
import React from 'react'
import Banner from '../layouts/banner';
import About from '../layouts/about'
const Home = () => {
  return(
    <Content className="home_content">
      <Banner />
      <About />
    </Content>
  )
}

export default Home;