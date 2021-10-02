import React from 'react'
import { Flex } from '../../common'
import { Link } from 'react-router-dom'

export default function _MenuItem({ icon, title, link }) {
  return (
    <Link to={link}>
      <Flex row className="item px-3 py-2">
        <Flex center className="menu-item-icon p-1">
          <i className={icon} />
        </Flex>
        <Flex center className="px-2">
          <span>{title}</span>
        </Flex>
      </Flex>
    </Link>
  );
}
