/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax } from 'gsap';
import scrollMagic from 'scrollmagic';
import { Content, FloatingButton as SIcon, Flex } from '../../common';
import { sIntro } from '../../../data/index.json';

const Projects = () => {
  useEffect(() => {
    const controller = new scrollMagic.Controller();
    const tl = new TimelineMax();
    tl.from('#box', 0.5, { opacity: 0, scale: 0 });
    tl.from('#d-intro-txt', 0.5, { x: 200, opacity: 0 });
    tl.from('#d-intro-txt-under-line', 1, { width: 0 }, '=.5');
    tl.from('#d-intro-web', 0.5, { x: -200, opacity: 0 }, '=-1');
    tl.from('#d-intro-mobile', 0.5, { x: 200, opacity: 0 }, '=-.7');
    tl.from('#d-link-to-projects', 0.5, { x: 200, opacity: 0 }, '=-.7');
    new scrollMagic.Scene({
      triggerElement: '#short-intro',
    })
      .setTween(tl)
      .addTo(controller);
  }, []);
  return (
    <Content id="short-intro" className="section project_few">
      <Content className="container">
        <Content className="row justify-content-center">
          <Content className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">{sIntro.title1}</span>
          </Content>
        </Content>
        <Content className="row">
          <Content className="col-xl-6 col-md-6 col-sm-12">
            <h3 id="d-intro-txt">
              {sIntro.title}
              <span id="d-intro-txt-under-line" />
            </h3>
          </Content>
          <Content className="col-xl-6 col-md-6 col-sm-12">
            <Content id="d-intro-web" className="s-intro s-intro-web-mob">
              <Content className="s-intro-web-mob-inner">
                <span className="d-i-web-icon">
                  <i className="fa fa-info" />
                </span>
                <h3>{sIntro.section1.title}</h3>
                <p>{sIntro.section1.description}</p>
                <Content className="d-flex">
                  {sIntro.section1.techList.map((item, i) => (
                    <SIcon
                      key={`key_${i}`}
                      styleClass={item.icon}
                    />
                  ))}
                </Content>
              </Content>
            </Content>
          </Content>
        </Content>
        <Content className="row">
          <Content className="col-xl-6 col-md-6 col-sm-12">
            <Content id="d-intro-mobile" className="s-intro s-intro-api">
              <Content className="s-intro-api-inner">
                <span className="d-i-api-icon">
                  <i className="fa fa-info" />
                </span>
                <h3>{sIntro.section2.title}</h3>
                <p>{sIntro.section2.description}</p>
                <Content className="d-flex">
                  {sIntro.section2.techList.map((item, i) => (
                    <SIcon
                      key={`key_${i}`}
                      styleClass={item.icon}
                    />
                  ))}
                </Content>
              </Content>
            </Content>
          </Content>
          <Flex
            className="col-xl-6 col-md-6 col-sm-12"
            center
          >
            <Link
              id="d-link-to-projects"
              className="boxed-btn d-link-to-projects mt-sm-5"
              to="/projects"
            >
              More porjects
            </Link>
          </Flex>
        </Content>
      </Content>
    </Content>
  );
};

export default Projects;
