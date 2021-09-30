import React from 'react';
import { Content } from '../../common';
import { header } from '../../../data/index.json';

export default function TopHeader() {
  return (
    <Content
    className="header-top_area d-none d-lg-block"
  >
    <Content className="container">
      <Content className="row">
        <Content className="col-xl-6 col-md-6 ">
          <Content className="social_media_links">
            {header.top.social_links.map(({ name, link, icon }) => (
              <a target="_blank" key={name} rel="noreferrer" href={link}>
                <i className={icon}></i>
              </a>
            ))}
          </Content>
        </Content>
        <Content className="col-xl-6 col-md-6">
          <Content className="short_contact_list">
            <ul>
              <li>
                <a href="https://gmail.com/">
                  <i className="icon-envelope-letter"></i> {header.top.email}
                </a>
              </li>
              <li>
                <a href="https://gmail.com/">
                  <i className="icon-phone"></i> {header.top.phone}
                </a>
              </li>
            </ul>
          </Content>
        </Content>
      </Content>
    </Content>
  </Content>
  )
}
