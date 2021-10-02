import React, { useEffect } from 'react'
import { Content } from '../../common'
import TopHeader from './_TopHeader'
import Header from './_Header'
import { $ } from "../../../assets/js/plugins";

export default function Index() {
  useEffect(() =>{
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 150) {
        $("#sticky-header").removeClass("sticky");
        $("#sticky-header-top").removeClass("sticky");
        $("#back-top").fadeIn(500);
      } else {
        $("#sticky-header").addClass("sticky");
        $("#sticky-header-top").addClass("sticky");
        $("#back-top").fadeIn(500);
      }
    });
  }, [])
  return (
    <Content className="header-area">
      <TopHeader />
      <Header />
    </Content>
  )
}
