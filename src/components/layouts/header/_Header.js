import React from "react";
import { Content, Flex } from "../../common";
import { header } from "../../../data/index.json";

export default function _Header() {
  // useEffect(() => {
  //   window.addEventListener('scroll', (e) => {
  //     let scroll = window.scrollY;
  //     if (scroll < 200) {
  //       headerRef.current.classList.remove('sticky')
  //     } else {
  //       headerRef.current.classList.add('sticky')
  //     }
  //   })
  // }, []);

  return (
    <Content className="main-header-area">
      <Content className="container">
        <Flex between center>
          <Content className="d-block">
            <Content className="logo">
              <a href="#home">
                <span className="d-flex align-items-center">
                  <i>{header.main.name.substring(0, 1).toUpperCase()}</i>
                  {header.main.name.substring(1, header.main.name.length)}
                </span>
              </a>
            </Content>
          </Content>
          <Flex between center>
            <Content className="main-menu  d-none d-lg-block">
              <nav>
                <ul id="navigation">
                  {header.main.sections_links.map(({ name, section }) => (
                    <li
                      key={name}
                    >
                      <a href="indexx">{name} </a></li>
                  ))}
                </ul>
              </nav>
            </Content>
            <Content className="Appointment">
              <Content className="">
                <button className="boxed-btn contact_me_action ml-2 d-flex align-items-center">
                  <span className="d-none d-lg-block">More&nbsp;</span>  <i className="icon-arrow-down"></i>
                </button>
              </Content>
            </Content>
          </Flex>
        </Flex>
        <Content className="col-12">
          <Content className="mobile_menu d-block d-lg-none"></Content>
        </Content>
      </Content>
    </Content>
  );
}
