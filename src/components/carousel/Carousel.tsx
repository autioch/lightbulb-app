import React, { useContext } from 'react';

import { ConfigContext } from '../../context';
import styles from './carousel.module.scss';

export function Carousel() {
  const { speed, color } = useContext(ConfigContext);

  return (<div
    className={styles.Carousel}
    style={{
      backgroundColor: color,
      transition: `background-color ${speed}ms linear`
    }}
  />);
}
