import React from "react";
import BannerContent from "./_BannerContent";
import CodeAnimation from "./_CodeAnimation";
import { Content } from "../../common";

export default function index() {
  return (
    <Content className="slider_area">
      <Content className="single_slider  d-flex align-items-center">
        <Content className="container">
          <Content className="row">
            <BannerContent />
            <CodeAnimation />
          </Content>
        </Content>
      </Content>
    </Content>
  );
}
