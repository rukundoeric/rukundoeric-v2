import React from 'react';
import aboutImg from '../../../assets/imgs/about.jpg';
import ExpetiseItem from './_ExpetiseItem';
import { Link } from 'react-router-dom';
import { about, expertise } from '../../../data/index.json';
import { Content } from '../../common';

export default function About() {
  return (
    <Content className="about-part ftco-section goto-here">
      <Content className="container">
        <Content className="overlay-about" />
        <Content className="container">
          <Content className="row justify-content-center">
            <Content className="col-md-12 mt-5 heading-section text-center ftco-animate mb-5">
              <span className="subheading">{about.title}</span>
            </Content>
          </Content>
        </Content>
        <Content className="px-0">
          <Content className="row d-sm-flex text-wrapper align-items-stretch">
            <Content className="one-half d-flex align-self-stretch">
              <img src={aboutImg} alt="" />
            </Content>
            <Content className="one-half half-text d-flex justify-content-end align-items-center">
              <Content className="text-inner">
                <Content className="about_text">
                  <h3>{about.title2}</h3>
                  <p>{about.description}<Link to="/introduction" className="ml-2">More</Link></p>
                </Content>
                <Content className="row d-flex">
                  <Content className="col-md-12 title-2">
                    <h3>{expertise.sectionName}</h3>
                  </Content>
                  {expertise.items.map((item, i) => (
                    <ExpetiseItem
                      key={`key_${i}`}
                      title={item.title}
                      desc={item.description}
                      icon={item.icon}
                      animation={item.animation}
                    />
                  ))}
                </Content>
              </Content>
            </Content>
          </Content>
        </Content>
      </Content>
    </Content>
  );
}
