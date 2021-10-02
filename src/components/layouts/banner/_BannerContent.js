import React from "react"
import { Content, Flex } from '../../common'
import { banner } from "../../../data/index.json"

export default function _BannerContent() {
  return (
    <Content className="col-xl-6 col-lg-6">
      <Flex column className="slider_text">
        <span className="sd_text text-center text-md-start">{banner.greating}</span>
        <h3 className="text-center text-md-start">{banner.introduction}</h3>
        <p className="text-center text-md-start" dangerouslySetInnerHTML={{ __html: banner.description }} />
        <Flex center className="justify-content-lg-start">
          <Flex className="slider_btns flex-column flex-sm-row">
            <button className="boxed-btn" > Contact me </button>
            <Content className="separator"/>
            <button className="boxed-btn" > Contact me </button>
          </Flex>
        </Flex>
      </Flex>
    </Content>
  );
}
