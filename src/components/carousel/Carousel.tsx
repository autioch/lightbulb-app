import React from 'react';

import { useColors } from '../../contexts/colors';
import { useCurrentIndex } from '../../contexts/currentIndex';
import { useSpeed } from '../../contexts/speed';
import styles from './carousel.module.scss';

export function Carousel() {
  const colors = useColors();
  const index = useCurrentIndex();
  const speed = useSpeed();

  return (<div
    className={styles.Carousel}
    style={{
      backgroundColor: colors[index].value,
      transition: `background-color ${speed}ms linear`
    }}
  />);
}
