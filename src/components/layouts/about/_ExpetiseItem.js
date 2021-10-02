import React from 'react';
import { FloatingButton } from '../../common';

export default function aboutFact({
  title, desc, icon, iconStyle, animation,
}) {
  return (
    <div
      // data-aos={animation.name}
      // data-aos-anchor-placement="bottom-bottom"
      // data-aos-easing={animation.easing}
      // data-aos-duration={animation.duration}
      // data-aos-delay={animation.delay}
      // data-aos-offset="0"
      className="col-md-12 d-flex align-self-stretch ftco-animate"
    >
      <div className="media block-6 services-wrap d-flex">
        <FloatingButton
          elmId="contact-us-btn"
          styleClass="icon8"
          icon={icon}
        />
        <div className="media-body pl-4">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
