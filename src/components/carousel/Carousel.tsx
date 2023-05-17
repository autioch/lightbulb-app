import './carousel.scss';
import React, { useContext } from 'react';

import { ConfigContext } from '../../context';

export function Carousel() {
  const { speed, color } = useContext(ConfigContext);

  return (<div
    className="Carousel"
    style={{
      backgroundColor: color,
      transition: `background-color ${speed}ms linear`
    }}
  />);
}
