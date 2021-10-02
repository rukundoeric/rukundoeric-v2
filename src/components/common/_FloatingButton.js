import React from 'react';
import { Flex } from './index';

export default function FloatingButton({
  elmId, styleClass, icon, title, link,
}) {
  return (
    <Flex
      id={elmId}
      title={title || ''}
      className={`${styleClass || 'icon'}`}
      center
      onClick={(e) => e}
    >
      <span>
        <i className={icon} />
      </span>
    </Flex>
  );
}
