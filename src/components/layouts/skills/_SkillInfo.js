import React from 'react'
import { Content, Flex } from '../../common'

export default function _SkillInfo({ skill: { name, icon, level, description } }) {
  return (
    <Content id="skillInfo" className="skillInfo p-3">
      <Content className="d-flex flex-column">
         <Flex
          between
         >
           <h6>{name}</h6>
           <img src={icon} alt={name} />
         </Flex>
         <small className="desc">{description}</small>
         <small className="level mt-2">My level:<i className={`${level.toLowerCase()} ml-2`}>{level}</i></small>
      </Content>
    </Content>
  )
}
