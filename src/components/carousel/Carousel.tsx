import React, { useCallback, useEffect, useState } from 'react';

import { useColors } from '../../contexts/colors';
import { useSpeed } from '../../contexts/speed';
import styles from './carousel.module.scss';

export function Carousel({ isPaused }: { isPaused:boolean}) {
  const colors = useColors();
  const speed = useSpeed();

  const [index, setIndex] = useState(0);

  const changeColor = useCallback(() => {
    setIndex((index + 1) % colors.length);
  }, [colors, index]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(changeColor, speed);

      return () => clearInterval(interval);
    }
  }, [isPaused, speed, changeColor]);

  return (<div
    className={styles.Carousel}
    style={{
      backgroundColor: colors[index].value,
      transition: `background-color ${speed}ms linear`
    }}
  >
  </div>);
}
