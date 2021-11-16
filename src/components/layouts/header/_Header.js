/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Content, Flex } from '../../common';
import { header } from '../../../data/index.json';
import { $ } from '../../../assets/js/plugins';
import MenuItem from './_MenuItem';

export default function Header() {
  useEffect(() => {
    $('#more-button-menu').click(function () {
      $(this).next('.dropdown').fadeIn(100);
      $('#icon-arrow-down').css({ transform: `rotate(${180}deg)` });
    });
    $(document).click(e => {
      const { target } = e;
      if (
        !$(target).is('#more-button-menu')
        && !$(target).parents().is('#more-button-menu')
      ) {
        $('.dropdown').fadeOut(200);
        $('#icon-arrow-down').css({ transform: `rotate(${0}deg)` });
      }
    });
  }, []);

  return (
    <Content id="sticky-header" className="main-header-area">
      <Content className="container">
        <Flex between center>
          <Content className="d-block">
            <Content className="logo">
              <Link href="/">
                <span className="d-flex align-items-center">
                  <i>{header.main.name.substring(0, 1).toUpperCase()}</i>
                  {header.main.name.substring(1, header.main.name.length)}
                </span>
              </Link>
            </Content>
          </Content>
          <Flex between center>
            <Content className="main-menu  d-none d-lg-block">
              <Content>
                <ul id="navigation">
                  {header.main.sections_links.map(({ name, link }) => (
                    <li key={name}>
                      <Link to={link}>
                        {name}
                        {' '}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Content>
            </Content>
            <Content className="Appointment">
              <Content className="more-menu-container">
                <button
                  id="more-button-menu"
                  className="boxed-btn contact_me_action ml-2 d-flex align-items-center"
                >
                  <span className="d-none d-lg-block">More&nbsp;</span>
                  {' '}
                  <i id="icon-arrow-down" className="icon-arrow-down" />
                </button>
                <Content className="dropdown dropdown-menu-o">
                  <Flex column>
                    {header.main.more_links.map(({ name, icon, link }) => (
                      // eslint-disable-next-line react/jsx-key
                      <MenuItem icon={icon} title={name} link={link} />
                    ))}
                  </Flex>
                </Content>
              </Content>
            </Content>
          </Flex>
        </Flex>
        <Content className="col-12">
          <Content className="mobile_menu d-block d-lg-none" />
        </Content>
      </Content>
    </Content>
  );
}
