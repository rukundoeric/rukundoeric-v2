import React from 'react'
import { Content } from '../../common'
import TopHeader from './_TopHeader'
import Header from './_Header'

export default function index() {
  return (
    <Content className="header-area">
      <TopHeader />
      <Header />
    </Content>
  )
}
