import React from 'react'
import Code from './_Code'
import { FloatingButton } from '../../common'

export default function _CodeAnimation() {
  return (
    <div className="col-xl-6 col-lg-6 mt-5 code-area justify-content-center align-items-center">
    <div className="content-d d-flex mt-auto justify-content-center align-items-center">
      <div className="icon d-none d-lg-flex">
        <FloatingButton icon="fa fa-chevron-right" styleClass="icon6" />
      </div>
      <div className="code align-items-center">
        <Code />
      </div>
    </div>
  </div>
  )
}
