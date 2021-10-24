import React, { useEffect } from 'react';
import { TimelineMax } from 'gsap';
import scrollMagic from 'scrollmagic';
import { Content, FloatingButton as SIcon } from '../../common';
import { sIntro } from '../../../data/index.json';

const Projects = () => {
  useEffect(() => {
    let controller = new scrollMagic.Controller();
    const tl = new TimelineMax();
    tl.from('#box', 0.5, { opacity: 0, scale: 0 });
    tl.from('#d-intro-txt', 0.5, { x: 200, opacity: 0 });
    tl.from('#d-intro-txt-under-line', 1, { width: 0 }, '=.5');
    tl.from('#d-intro-web', 0.5, { x: -200, opacity: 0 }, '=-1');
    tl.from('#d-intro-mobile', 0.5, { x: 200, opacity: 0 }, '=-.7');
    new scrollMagic.Scene({
      triggerElement: '#short-intro',
      // triggerHook: 'onLeave',
      // duration: '100%',
    })
      // .setPin('#short-intro')
      .setTween(tl)
      .addTo(controller);
  }, [])
  return (
    <Content id="short-intro" className="section project_few">
      <Content className="container">
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
        </Content>
      </Content>
    </Content>
  );
}

export default Projects;